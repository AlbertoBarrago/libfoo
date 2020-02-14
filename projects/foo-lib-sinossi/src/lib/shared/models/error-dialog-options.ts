export class ErrorDialogOptions
{
	private _error?: any;
	private _data?: any;
	private _title?: string;
	private _message?: string;
	private _cancelBtn?: string;
	private _sendBtn?: string;
	private _callback?: (obj?: any) => any | void;

	get error(): any
	{
		return this._error;
	}

	set error(value: any)
	{
		this._error = value;
	}

	get data(): any
	{
		return this._data;
	}

	set data(value: any)
	{
		this._data = value;
	}

	get title(): string
	{
		return this._title;
	}

	set title(value: string)
	{
		this._title = value;
	}

	get message(): string
	{
		return this._message;
	}

	set message(value: string)
	{
		this._message = value;
	}

	get cancelBtn(): string
	{
		return this._cancelBtn;
	}

	set cancelBtn(value: string)
	{
		this._cancelBtn = value;
	}

	get sendBtn(): string
	{
		return this._sendBtn;
	}

	set sendBtn(value: string)
	{
		this._sendBtn = value;
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
