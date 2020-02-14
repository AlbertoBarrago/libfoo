import { ErrorDialogOptions } from "./error-dialog-options";

export class ApiErrorHandlingInfo
{
	private _preModalCallback: (any) => void;
	private _modalConfigMap: Map<number, ErrorDialogOptions>;

	get preModalCallback(): (any) => void
	{
		return this._preModalCallback;
	}

	set preModalCallback(value: (any) => void)
	{
		this._preModalCallback = value;
	}

	get modalConfigMap(): Map<number, ErrorDialogOptions>
	{
		return this._modalConfigMap;
	}

	set modalConfigMap(value: Map<number, ErrorDialogOptions>)
	{
		this._modalConfigMap = value;
	}
}
