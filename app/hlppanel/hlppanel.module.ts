import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { HelppanelComponent } from "./hlppanel.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [HelppanelComponent],
    exports: [HelppanelComponent]
})
export class HelppanelModule { }