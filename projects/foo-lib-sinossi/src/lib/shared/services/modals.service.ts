import { Injectable } from "@angular/core";
import {
	MatDialog,
	MatDialogRef
} from "@angular/material";
import { WaitModalComponent } from "../../modals/wait-modal/wait-modal.component";
import { ErrorModalComponent } from "../../modals/error-modal/error-modal.component";
import { WaitDialogOptions } from "../models/wait-dialog-options";
import { ErrorDialogOptions } from "../models/error-dialog-options";
import { MessageDialogOptions } from "../models/message-dialog-options";
import { ConfirmDialogOptions } from "../models/confirm-dialog-options";
import { MessageModalComponent } from "../../modals/message-modal/message-modal.component";
import { ConfirmModalComponent } from "../../modals/confirm-modal/confirm-modal.component";
import { MainConstants } from "../../../main-constants";

@Injectable({
	providedIn: "root"
})
export class ModalsService
{
	private waitDialogRef: MatDialogRef<WaitModalComponent, any>;

	constructor(public matDialog: MatDialog)
	{
	}

	openWaitDialog(options?: WaitDialogOptions)
	{
		if(this.matDialog.getDialogById("wait-modal-dialog")) {
			return;
		}
		this.waitDialogRef = this.matDialog.open(WaitModalComponent, {
			id: "wait-modal-dialog",
			position: ModalsService.getDefaultPosition()
		});
	}

	closeWaitDialog()
	{
		if(!this.waitDialogRef) {
			return;
		}
		this.waitDialogRef.close();
		this.waitDialogRef = undefined;
	}

	openErrorDialog(options: ErrorDialogOptions)
	{
		const errorDialog = this.matDialog.open(ErrorModalComponent, {
			width: MainConstants.MODAL_MD,
			data: options,
			position: ModalsService.getDefaultPosition()
		});
	}

	openMessageDialog(options: MessageDialogOptions)
	{
		const errorDialog = this.matDialog.open(MessageModalComponent, {
			width: MainConstants.MODAL_MD,
			data: options,
			position: ModalsService.getDefaultPosition()
		});
	}

	openConfirmDialog(options?: ConfirmDialogOptions)
	{
		const confirmDialog = this.matDialog.open(ConfirmModalComponent, {
			width: MainConstants.MODAL_MD,
			data: options,
			position: ModalsService.getDefaultPosition()
		});
	}

	static getDefaultPosition()
	{
		let top = Math.round(window.innerHeight * 0.1).toString() + "px";
		let position = {
			"top": top
		};
		return position;
	}

}
