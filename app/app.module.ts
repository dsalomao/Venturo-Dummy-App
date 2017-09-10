import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DummyModule } from "./dummy/dummy.module";
import { DummyComponent } from "./dummy/dummy.component";
import { AnyHelpComponent } from "./dummy/help.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        BrowserModule, 
        DummyModule,
        RouterModule.forRoot([
            { path: "dummy", component: DummyComponent },
            { path: "help", component: AnyHelpComponent },
            { path: "**", redirectTo: "/dummy" }
        ])],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }