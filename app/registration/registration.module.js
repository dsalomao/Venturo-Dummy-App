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
const registration_component_1 = require("./registration.component");
let RegistrationModule = class RegistrationModule {
};
RegistrationModule = __decorate([
    core_1.NgModule({
        imports: [model_module_1.ModelModule, platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [registration_component_1.RegistrationComponent],
        exports: [registration_component_1.RegistrationComponent]
    }), 
    __metadata('design:paramtypes', [])
], RegistrationModule);
exports.RegistrationModule = RegistrationModule;
