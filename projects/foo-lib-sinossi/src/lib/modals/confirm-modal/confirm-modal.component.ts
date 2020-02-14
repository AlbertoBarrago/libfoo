import {
	Component, Inject,
	OnInit
} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ConfirmDialogOptions} from "../../shared/models/confirm-dialog-options";
import {UtilsService} from "../../shared/services/utils.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
	selector: "app-confirm-modal",
	templateUrl: "./confirm-modal.component.html",
	styleUrls: ["./confirm-modal.component.scss"]
})
export class ConfirmModalComponent implements OnInit
{

	public title: string;
	public message: string;
	public okBtn: string;
	public cancelBtn: string;

	constructor(private dialogRef: MatDialogRef<ConfirmModalComponent>, private utilsService: UtilsService, private translateService: TranslateService, @Inject(MAT_DIALOG_DATA) private options:ConfirmDialogOptions)
	{
	}

	ngOnInit()
	{
		this.dialogRef.disableClose = true; //avoid the dialog to close on blur event
		this._setTitle();
		this._setMessage();
		this._setOkBtn();
		this._setCancelBtn();
	}

	ok = () => {
		this.dialogRef.close();
		let callback = this.options.okCallback;
		if(!this.utilsService.isBlank(callback)){
			callback(this.options.data);
		}
	};

	cancel = () => {
		this.dialogRef.close();
		let callback = this.options.cancelCallback;
		if(!this.utilsService.isBlank(callback)){
			callback(this.options.data);
		}
	};

	_setTitle = () => {
		this.title = this.options.title;
		if(this.utilsService.isBlank(this.title)){
			this.title = this.translateService.instant('confirm-modal-title');
		}
	};

	_setMessage = () => {
		this.message = this.options.message;
		if(this.utilsService.isBlank(this.message)){
			this.message = '';
		}
	};

	_setOkBtn = () => {
		this.okBtn = this.options.okBtn;
		if(this.utilsService.isBlank(this.okBtn)){
			this.okBtn = this.translateService.instant('ok');
		}
	};

	_setCancelBtn = () => {
		this.cancelBtn = this.options.cancelBtn;
		if(this.utilsService.isBlank(this.cancelBtn)){
			this.cancelBtn = this.translateService.instant('cancel');
		}
	};



}
