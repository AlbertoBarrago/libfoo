import {
	Component,
	Inject,
	OnInit
} from "@angular/core";
import {
	MAT_DIALOG_DATA,
	MatDialogRef
} from "@angular/material";
import { ErrorDialogOptions } from "../../shared/models/error-dialog-options";
import { UtilsService } from "../../shared/services/utils.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
	selector: "app-error-modal",
	templateUrl: "./error-modal.component.html",
	styleUrls: ["./error-modal.component.scss"]
})
export class ErrorModalComponent implements OnInit
{
	public message: string;
	public title: string;
	public sendBtn: string;
	public closeBtn: string;

	constructor(private dialogRef: MatDialogRef<ErrorModalComponent>, private utilsService: UtilsService, private translateService: TranslateService,
		@Inject(MAT_DIALOG_DATA) private options?: ErrorDialogOptions
	)
	{
	}

	ngOnInit()
	{
		this.dialogRef.disableClose = true; //avoid the dialog to close on blur event

		if(this.utilsService.isBlank(this.options)) {
			this.options = new ErrorDialogOptions();
		}

		this._setCloseCallback(this.options);
		this._setTitle(this.options.title);
		this._setMessage(this.options.message, this.options.error);
		this._setSendBtn(this.options.sendBtn);
		this._setCloseBtn(this.options.cancelBtn);
	}

	closeDialog()
	{
		this.dialogRef.close(false);
	}

	sendError()
	{
		this.dialogRef.close(true);
	}

	private _setMessage(message: string, error: any)
	{

		if(this.utilsService.isBlank(message)){
			message = this.translateService.instant('error-dialog-message');
		}

		if(!this.utilsService.isBlank(error) && this.utilsService.isObject(error)) {
			this.message = "[" + error.status + "] " + message;
		} else {
			this.message = message;
		}
	}

	private _setSendBtn(sendBtn: string)
	{
		if(this.utilsService.isBlank(sendBtn)){
			this.sendBtn = this.translateService.instant('error-dialog-send-btn');
		} else {
			this.sendBtn = sendBtn;
		}
	}

	private _setCloseBtn(closeBtn: string)
	{
		if(this.utilsService.isBlank(closeBtn)){
			this.closeBtn = this.translateService.instant('dialog-close-btn');
		} else {
			this.closeBtn = closeBtn;
		}
	}

	private _setCloseCallback(options?: ErrorDialogOptions)
	{
		this.dialogRef.afterClosed().subscribe((result) => {
			if(result) {
				// TODO send error
				console.log("send error not implemented yet!");
			}
			if(!this.utilsService.isBlank(options.callback)) {
				options.callback(options.data);
			}
		});
	}

	private _setTitle(title: string)
	{
		if(this.utilsService.isBlank(title)){
			this.title = this.translateService.instant('error-dialog-title');
		} else {
			this.title = title;
		}
	}
}
