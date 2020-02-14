import { Injectable } from "@angular/core";
import { MainConstants } from "../../../main-constants";

@Injectable({
	providedIn: "root"
})
export class UtilsService
{

	constructor()
	{
	}

	isBlank(obj)
	{
		return obj === "" || obj === undefined || obj === null;
	}

	isObject(obj)
	{
		return (obj instanceof Object) && !(obj instanceof Array);
	}

	isArray(obj)
	{
		return obj instanceof Array;
	}

	startsWith = (string, start) => {
		string = string.toUpperCase();
		start = start.toUpperCase();
		let tmp = string.substr(0, start.length);
		return tmp === start;
	};

	objectToBase64 = (obj: object): string => {
		return btoa(JSON.stringify(obj));
	};

	base64ToObject = (s: string): object => {
		let decoded = atob(s);
		s = decoded.replace(/"_/g, '"');
		console.log(decoded);
		console.log(s);
		return JSON.parse(s);
	};
	buildApiUrl(resource: string, pathParams: object, queryParams: object): string
	{
		let url = "";
		if(MainConstants.USE_MOCKS) {
			url = MainConstants.MOCKS_API_BASE_URL + resource;
		} else {
			url = MainConstants.API_BASE_URL + resource;
		}
		url = this.addPathParams(url, pathParams);
		url = this.addQueryParams(url, queryParams);
		return url;
	}

	addPathParams = (url, pathParams) => {
		if(this.isBlank(pathParams) && !this.isObject(pathParams)) {
			return url;
		}
		for(let key in pathParams) {
			url = url.replace("{" + key + "}", pathParams[key]);
		}
		return url;
	};

	addQueryParams = (url, queryParams) => {
		if(this.isBlank(queryParams) && !this.isObject(queryParams)) {
			return url;
		}
		let queryString = "";
		for(let key in queryParams) {
			queryString += "&" + key + "=" + queryParams[key];
		}
		queryString = queryString.replace("&", "?");
		return url + queryString;
	};

	prepareBody = (body) => {
		let newBody = {};
		for(let key in body) {
			let newKey = key;
			if(newKey.indexOf("_") === 0) {
				newKey = newKey.replace("_", "");
			}
			newBody[newKey] = body[key];
		}
		return newBody;
	};
}
