export class ConfirmDialogOptions
{
	private _data?: any;
	private _title?: string;
	private _message?: string;
	private _okBtn?: string;
	private _cancelBtn?: string;
	private _okCallback?: (obj?: any) => any | void;
	private _cancelCallback?: (obj?: any) => any | void;

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

	get okBtn(): string
	{
		return this._okBtn;
	}

	set okBtn(value: string)
	{
		this._okBtn = value;
	}

	get cancelBtn(): string
	{
		return this._cancelBtn;
	}

	set cancelBtn(value: string)
	{
		this._cancelBtn = value;
	}

	get okCallback(): (obj?: any) => (any | void)
	{
		return this._okCallback;
	}

	set okCallback(value: (obj?: any) => (any | void))
	{
		this._okCallback = value;
	}

	get cancelCallback(): (obj?: any) => (any | void)
	{
		return this._cancelCallback;
	}

	set cancelCallback(value: (obj?: any) => (any | void))
	{
		this._cancelCallback = value;
	}
}
