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
let HelppanelComponent = class HelppanelComponent {
    constructor() {
        this.closed = true;
        this.helptxt = "Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. " +
            "Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. " +
            "Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. " +
            "Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue commodo. Etiam bibendum elit eget erat.Nam quis nulla. Integer malesuada. " +
            "In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. " +
            "Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. " +
            "Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin.";
    }
    get isClosed() {
        return this.closed;
    }
    get text() {
        return this.helptxt;
    }
    changePanelStatus() {
        this.closed = !this.closed;
        console.log("status: " + this.closed);
    }
};
HelppanelComponent = __decorate([
    core_1.Component({
        selector: "help",
        moduleId: module.id,
        templateUrl: "hlppanel.component.html",
        styleUrls: ["hlppanel.component.css"]
    }), 
    __metadata('design:paramtypes', [])
], HelppanelComponent);
exports.HelppanelComponent = HelppanelComponent;
