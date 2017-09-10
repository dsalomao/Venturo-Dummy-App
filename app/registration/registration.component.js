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
const biker_model_1 = require("../model/biker.model");
let RegistrationComponent = class RegistrationComponent {
    constructor(repository, biker) {
        this.repository = repository;
        this.biker = biker;
        this.bikerSent = false;
        this.submitted = false;
    }
    get bikers() {
        return this.repository.getBikers();
    }
    submitBiker(form) {
        this.biker.sun ? this.biker.sun = true : this.biker.sun = false;
        this.biker.mon ? this.biker.mon = true : this.biker.mon = false;
        this.biker.tue ? this.biker.tue = true : this.biker.tue = false;
        this.biker.wed ? this.biker.wed = true : this.biker.wed = false;
        this.biker.thu ? this.biker.thu = true : this.biker.thu = false;
        this.biker.fri ? this.biker.fri = true : this.biker.fri = false;
        this.biker.sat ? this.biker.sat = true : this.biker.sat = false;
        this.biker.registration = Date.now();
        this.submitted = true;
        if (form.valid) {
            this.repository.saveBiker(this.biker).subscribe(biker => {
                this.biker.clear();
                this.bikerSent = true;
                this.submitted = false;
                window.location.reload();
            });
        }
    }
};
RegistrationComponent = __decorate([
    core_1.Component({
        selector: "registration",
        moduleId: module.id,
        templateUrl: "registration.component.html",
        styleUrls: ["registration.component.css"]
    }), 
    __metadata('design:paramtypes', [biker_repository_1.BikerRepository, biker_model_1.Biker])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
