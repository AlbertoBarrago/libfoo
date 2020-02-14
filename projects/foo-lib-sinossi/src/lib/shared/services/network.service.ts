import { Injectable } from "@angular/core";
import { MainConstants } from "../../../main-constants";
import { UtilsService } from "./utils.service";
import { tap } from "rxjs/internal/operators";
import { HttpClient } from "@angular/common/http";
import { NetworkConfiguration } from "../models/network-configuration";
import { ErrorService } from "./error.service";

@Injectable({
	providedIn: "root"
})
export class NetworkService
{
	constructor(private http: HttpClient, private utils: UtilsService, private errorService: ErrorService)
	{
	}

	doGet = (config: NetworkConfiguration) => {
		this.doApiCall(config, "GET");
	};

	doPut = (config: NetworkConfiguration) => {
		this.doApiCall(config, "PUT");
	};

	doPost = (config: NetworkConfiguration) => {
		this.doApiCall(config, "POST");
	};

	doDelete = (config: NetworkConfiguration) => {
		this.doApiCall(config, "DELETE");
	};

	private doApiCall = (config: NetworkConfiguration, method: string) => {
		let tapSuccessFn = (res?: object) => {
			console.log(method + " " + config.resource + " success");
			if(config.tapSuccess) {
				config.tapSuccess(res);
			}
		};
		let tapFailureFn = (err?: object) => {
			console.log(method + " " + config.resource + " failure");
			if(config.tapFailure) {
				config.tapFailure(err);
			}
		};
		let url = this.buildApiUrl(config.resource, config.pathParams, config.queryParams);
		let body;
		if(method === "PUT" || method === "POST") {
			body = this.prepareBody(config.body);
		}
		let action;
		switch(method) {
			case "GET":
				action = this.http.get(url);
				break;
			case "PUT":
				action = this.http.put(url, body);
				break;
			case "POST":
				action = this.http.post(url, body);
				break;
			case "DELETE":
				action = this.http.delete(url);
				break;
			default:
				// TODO manage error
				break;
		}
		let failureCallback = (errorResponse) => {
			this.errorService.manageErrorResponse(errorResponse, config.apiErrorHandlingInfo);
		};
		action.pipe(tap(tapSuccessFn, tapFailureFn)).subscribe(config.successCb, failureCallback);
	};

	private buildApiUrl = (resource: string, pathParams: object, queryParams: object): string => {
		let url = "";
		if(MainConstants.USE_MOCKS) {
			url = MainConstants.MOCKS_API_BASE_URL + resource;
		} else {
			url = MainConstants.API_BASE_URL + resource;
		}
		url = this.addPathParams(url, pathParams);
		url = this.addQueryParams(url, queryParams);
		return url;
	};

	private addPathParams = (url, pathParams) => {
		if(this.utils.isBlank(pathParams) && !this.utils.isObject(pathParams)) {
			return url;
		}
		for(let key in pathParams) {
			url = url.replace("{" + key + "}", pathParams[key]);
		}
		return url;
	};

	private addQueryParams = (url, queryParams) => {
		if(this.utils.isBlank(queryParams) && !this.utils.isObject(queryParams)) {
			return url;
		}
		let queryString = "";
		for(let key in queryParams) {
			queryString += "&" + key + "=" + queryParams[key];
		}
		queryString = queryString.replace("&", "?");
		return url + queryString;
	};

	private prepareBody = (body) => {
		let newBody = {};
		for(let key in body) {
			let newKey = key;
			if(newKey.indexOf("_") === 0) {
				newKey = newKey.replace("_", "");
			}
			newBody[newKey] = body[key];
			if(this.utils.isObject(newBody[newKey])) {
				newBody[newKey] = this.prepareBody(newBody[newKey]);
			} else if(this.utils.isArray(newBody[newKey])) {
				for(let entry of newBody[newKey]) {
					let index = newBody[newKey].indexOf(entry);
					newBody[newKey][index] = this.prepareBody(entry);
				}
			}
		}
		return newBody;
	};
}
