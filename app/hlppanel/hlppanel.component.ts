import { Component } from "@angular/core";

@Component({
    selector: "help",
    moduleId: module.id,
    templateUrl: "hlppanel.component.html",
    styleUrls: ["hlppanel.component.css"]
})
export class HelppanelComponent {
    public closed: boolean = true;
    public helptxt: string = "Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. " +
    "Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. " +
    "Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. " + 
    "Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue commodo. Etiam bibendum elit eget erat.Nam quis nulla. Integer malesuada. " + 
    "In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. " + 
    "Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. " + 
    "Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin.";

    constructor() { }

    get isClosed(): boolean {
        return this.closed;
    }

    get text(): string {
        return this.helptxt;
    }

    changePanelStatus() {
        this.closed = !this.closed;
        console.log("status: " + this.closed);
    }
}