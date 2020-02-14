import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WaitModalComponent } from "./wait-modal/wait-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ErrorModalComponent } from "./error-modal/error-modal.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MessageModalComponent } from "./message-modal/message-modal.component";
import { ConfirmModalComponent } from "./confirm-modal/confirm-modal.component";
import { TranslateModule } from "@ngx-translate/core";
import { MatButtonModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
	declarations: [
		WaitModalComponent,
		ErrorModalComponent,
		MessageModalComponent,
		ConfirmModalComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		MatProgressSpinnerModule,
		MatInputModule,
		MatDialogModule,
		MatButtonModule,
		MatFormFieldModule,
		FormsModule,
		FontAwesomeModule
	]
})
export class ModalsModule
{
}
