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
const biker_repository_1 = require("../model/biker.repository");
const router_1 = require("@angular/router");
let DummyComponent = class DummyComponent {
    constructor(repository, router) {
        this.repository = repository;
        this.router = router;
    }
    get bikers() {
        return this.repository.getBikers();
    }
    deleteBiker(biker) {
        console.log('entrou no component');
        return this.repository.deleteBiker(biker);
    }
    goToHelpPage() {
        this.router.navigateByUrl('/help');
    }
};
DummyComponent = __decorate([
    core_1.Component({
        selector: "dummy",
        moduleId: module.id,
        templateUrl: "dummy.component.html",
        styleUrls: ["dummy.component.css"]
    }), 
    __metadata('design:paramtypes', [biker_repository_1.BikerRepository, router_1.Router])
], DummyComponent);
exports.DummyComponent = DummyComponent;
