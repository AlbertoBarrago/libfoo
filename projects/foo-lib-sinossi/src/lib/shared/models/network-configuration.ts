import { ApiErrorHandlingInfo } from "./api-error-hanldling-info";

export class NetworkConfiguration
{
	private _resource: string;
	private _pathParams?: object;
	private _queryParams?: object;
	private _body?: object;
	private _tapSuccess?: (any?) => void;
	private _tapFailure?: (any?) => void;
	private _successCb?: (any?) => void;
	private _apiErrorHandlingInfo: ApiErrorHandlingInfo;

	get resource(): string
	{
		return this._resource;
	}

	set resource(value: string)
	{
		this._resource = value;
	}

	get pathParams(): object
	{
		return this._pathParams;
	}

	set pathParams(value: object)
	{
		this._pathParams = value;
	}

	get queryParams(): object
	{
		return this._queryParams;
	}

	set queryParams(value: object)
	{
		this._queryParams = value;
	}

	get body(): object
	{
		return this._body;
	}

	set body(value: object)
	{
		this._body = value;
	}

	get tapSuccess(): (any?) => void
	{
		return this._tapSuccess;
	}

	set tapSuccess(value: (any?) => void)
	{
		this._tapSuccess = value;
	}

	get tapFailure(): (any?) => void
	{
		return this._tapFailure;
	}

	set tapFailure(value: (any?) => void)
	{
		this._tapFailure = value;
	}

	get successCb(): (any?) => void
	{
		return this._successCb;
	}

	set successCb(value: (any?) => void)
	{
		this._successCb = value;
	}

	get apiErrorHandlingInfo(): ApiErrorHandlingInfo
	{
		return this._apiErrorHandlingInfo;
	}

	set apiErrorHandlingInfo(value: ApiErrorHandlingInfo)
	{
		this._apiErrorHandlingInfo = value;
	}
}
