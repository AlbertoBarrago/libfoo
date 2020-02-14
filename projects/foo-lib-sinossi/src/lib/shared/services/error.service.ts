import { Injectable } from "@angular/core";
import { ApiErrorHandlingInfo } from "../models/api-error-hanldling-info";
import { ModalsService } from "./modals.service";
import { ErrorDialogOptions } from "../models/error-dialog-options";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { SessionStorageService } from "./session-storage.service";

@Injectable({
	providedIn: "root"
})
export class ErrorService
{
	constructor(private modalService: ModalsService, private translateService: TranslateService, private router: Router, private sessionStorageService: SessionStorageService)
	{
	}

	manageErrorResponse = (errorResponse: any, errorHandlingInfo: ApiErrorHandlingInfo) => {
		if(errorHandlingInfo.preModalCallback) {
			errorHandlingInfo.preModalCallback(errorResponse);
		}

		if(!errorResponse.error) {
			this.dispatchError(errorResponse.status, errorHandlingInfo);
			return;
		}

		this.dispatchError(errorResponse.error.errorCode, errorHandlingInfo);
	};

	private dispatchError = (errorCode: number, errorHandlingInfo: ApiErrorHandlingInfo) => {
		if(!errorHandlingInfo.modalConfigMap || !errorHandlingInfo.modalConfigMap.has(errorCode)) {
			this.dispatchDefaultError(errorCode);
			return;
		}
		let options = errorHandlingInfo.modalConfigMap.get(errorCode);
		this.modalService.openErrorDialog(options);
	};

	private dispatchDefaultError = (errorCode: number) => {
		switch(errorCode) {
			case 401:
				this.manage401Error();
				break;
			default:
				this.manageDefaultError();
				break;
		}
	};

	private manage401Error = () => {
		this.sessionStorageService.forcedLogout();
		console.log("user not authenticated");
	};

	private manageDefaultError = () => {
		let options = new ErrorDialogOptions();
		options.title = this.translateService.instant('error-dialog-title');
		options.message = this.translateService.instant('error-dialog-message');
		this.modalService.openErrorDialog(options);
	};
}
