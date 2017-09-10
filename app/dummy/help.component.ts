import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `<div><h3 class="bg-info p-a-1">This is the "any information" Component required for the router</h3></div><br><a (click)="goBack()">Go Back</a>`
})
export class AnyHelpComponent {
    constructor(private router: Router) {}

    goBack() {
        this.router.navigateByUrl("/dummy");
    }
 }