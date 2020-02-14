export class EnumRadioValue
{
	private _value: string;
	private _label: string;

	constructor(value: string, label: string)
	{
		this._value = value;
		this._label = label;
	}

	get value(): string
	{
		return this._value;
	}

	get label(): string
	{
		return this._label;
	}
}
