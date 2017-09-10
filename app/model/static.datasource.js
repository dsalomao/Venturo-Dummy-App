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
const Observable_1 = require("rxjs/Observable");
const biker_model_1 = require("./biker.model");
require("rxjs/add/observable/from");
let StaticDataSource = class StaticDataSource {
    constructor() {
        this.bikers = [
            new biker_model_1.Biker().setBikerObj(1, "Sauron", "thedark@lord.com", "Mordor", "Sometimes", true, true, true, true, true, true, true, 1505051436310),
            new biker_model_1.Biker().setBikerObj(2, "Melkor", "truedark@lord.com", "Unknown", "Always", true, true, false, false, true, true, false, 1505051436310),
            new biker_model_1.Biker().setBikerObj(3, "Iluvitar", "the@creator.com", "Unknown", "Always", true, true, true, true, true, true, true, 1505051436310),
            new biker_model_1.Biker().setBikerObj(4, "Galndalf", "the@white.com", "Valinor", "Sometimes", true, false, false, false, false, false, true, 1505051436310),
            new biker_model_1.Biker().setBikerObj(5, "Elrond", "the@white.com", "Valinor", "Never", false, true, true, true, true, true, false, 1505051436310)
        ];
    }
    getBikers() {
        return Observable_1.Observable.from([this.bikers]);
    }
    saveBiker(biker) {
        console.log(biker);
        return Observable_1.Observable.from([biker]);
    }
    deleteBiker(biker) {
        console.log(biker);
        return Observable_1.Observable.from([this.bikers]);
    }
};
StaticDataSource = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], StaticDataSource);
exports.StaticDataSource = StaticDataSource;
