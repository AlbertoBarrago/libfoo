export class MainConstants
{
	static readonly DEFAULT_LANG = "it_IT";
	static readonly MOCKS_API_BASE_URL = "http://localhost:9997/";
	static readonly API_BASE_URL = "http://localhost:4200/api/";
	static readonly USE_MOCKS = true;
	static readonly MODAL_LG = "800px";
	static readonly MODAL_MD = "500px";
	static readonly MODAL_SM = "300px";
	static readonly VALIDATIONS = {
		RATE: '^[0-9]{1,3}(\\.[0-9]+)?$',
		NEGATIVE_RATE: '^\\-{0,1}[0-9]{1,3}(\\.[0-9]+)?$',
		DECIMAL: '^[0-9]+(\\.[0-9]+)?$',
	};
	static readonly SPINNER = {
		DIAMETER: 30,
		STROKE: 5
	}
}
