export class WaitDialogOptions
{
	private _data?: any;
	private _message?: string;
	private _callback?: (obj?: any) => any | void;

	get data(): any
	{
		return this._data;
	}

	set data(value: any)
	{
		this._data = value;
	}

	get message(): string
	{
		return this._message;
	}

	set message(value: string)
	{
		this._message = value;
	}

	get callback(): (obj?: any) => (any | void)
	{
		return this._callback;
	}

	set callback(value: (obj?: any) => (any | void))
	{
		this._callback = value;
	}
}
