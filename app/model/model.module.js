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
const static_datasource_1 = require("./static.datasource");
const biker_model_1 = require("./biker.model");
const biker_repository_1 = require("./biker.repository");
const rest_datasource_1 = require("./rest.datasource");
const http_1 = require("@angular/http");
let ModelModule = class ModelModule {
};
ModelModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule],
        providers: [biker_repository_1.BikerRepository, biker_model_1.Biker, { provide: static_datasource_1.StaticDataSource, useClass: rest_datasource_1.RestDataSource }]
    }), 
    __metadata('design:paramtypes', [])
], ModelModule);
exports.ModelModule = ModelModule;
