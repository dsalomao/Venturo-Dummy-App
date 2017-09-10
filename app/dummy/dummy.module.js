"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const model_module_1 = require("../model/model.module");
const dummy_component_1 = require("./dummy.component");
const hlppanel_module_1 = require("../hlppanel/hlppanel.module");
const registration_module_1 = require("../registration/registration.module");
const help_component_1 = require("./help.component");
let DummyModule = class DummyModule {
};
DummyModule = __decorate([
    core_1.NgModule({
        imports: [model_module_1.ModelModule, platform_browser_1.BrowserModule, forms_1.FormsModule, hlppanel_module_1.HelppanelModule, registration_module_1.RegistrationModule],
        declarations: [dummy_component_1.DummyComponent, help_component_1.AnyHelpComponent],
        exports: [dummy_component_1.DummyComponent, help_component_1.AnyHelpComponent]
    }), 
    __metadata('design:paramtypes', [])
], DummyModule);
exports.DummyModule = DummyModule;
