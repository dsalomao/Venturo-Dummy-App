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
let Biker = class Biker {
    setBikerObj(id, fullname, email, city, rideInGroup, sun, mon, tue, wed, thu, fri, sat, registration) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.city = city;
        this.rideInGroup = rideInGroup;
        this.sun = sun;
        this.mon = mon;
        this.tue = tue;
        this.wed = wed;
        this.thu = thu;
        this.fri = fri;
        this.sat = sat;
        this.registration = registration;
        return this;
    }
    clear() {
        this.id = null;
        this.fullname = this.email = this.city = this.rideInGroup = null;
        this.sun = this.mon = this.tue = this.wed = this.thu = this.fri = this.sat = false;
    }
};
Biker = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], Biker);
exports.Biker = Biker;
