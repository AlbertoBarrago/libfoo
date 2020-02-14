export class MessageDialogOptions {
	private _data?: any;
	private _title: string;
	private _message: string;
	private _okBtn?: string;
	private _callback?: (obj?: any) => any | void;

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

	get callback(): (obj?: any) => (any | void)
	{
		return this._callback;
	}

	set callback(value: (obj?: any) => (any | void))
	{
		this._callback = value;
	}
}
