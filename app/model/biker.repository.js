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
let BikerRepository = class BikerRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.bikers = [];
        dataSource.getBikers().subscribe(data => {
            this.bikers = data;
        });
    }
    getBikers() {
        return this.bikers;
    }
    saveBiker(biker) {
        return this.dataSource.saveBiker(biker);
    }
    deleteBiker(biker) {
        console.log('entrou no repository');
        return this.dataSource.deleteBiker(biker);
    }
};
BikerRepository = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [static_datasource_1.StaticDataSource])
], BikerRepository);
exports.BikerRepository = BikerRepository;
