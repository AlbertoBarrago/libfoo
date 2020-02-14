import {
	Component, Inject,
	OnInit
} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {UtilsService} from "../../shared/services/utils.service";
import {TranslateService} from "@ngx-translate/core";
import {MessageDialogOptions} from "../../shared/models/message-dialog-options";

@Component({
	selector: "app-message-modal",
	templateUrl: "./message-modal.component.html",
	styleUrls: ["./message-modal.component.scss"]
})
export class MessageModalComponent implements OnInit
{

	 title: string;
	 message: string;
	 okBtn: string;

	constructor(private dialogRef: MatDialogRef<MessageModalComponent>, private utilsService: UtilsService, private translateService: TranslateService, @Inject(MAT_DIALOG_DATA) private options:MessageDialogOptions)
	{
	}

	ngOnInit()
	{
		this.dialogRef.disableClose = true; //avoid the dialog to close on blur event
		this._setTitle();
		this._setMessage();
		this._setOkBtn();
	}

	ok = () => {
		this.dialogRef.close();
		let callback = this.options.callback;
		if(!this.utilsService.isBlank(callback)){
			callback(this.options.data);
		}
	};

	_setTitle = () => {
		this.title = this.options.title;
		if(this.utilsService.isBlank(this.title)){
			this.title = this.translateService.instant('message-modal-title');
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

}
