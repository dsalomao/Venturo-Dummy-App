import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { DummyComponent } from "./dummy.component";
import { HelppanelModule } from "../hlppanel/hlppanel.module";
import { RegistrationModule } from "../registration/registration.module";
import { AnyHelpComponent } from "./help.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, HelppanelModule, RegistrationModule],
    declarations: [DummyComponent, AnyHelpComponent],
    exports: [DummyComponent, AnyHelpComponent]
})
export class DummyModule { }