import { Component } from "@angular/core";
import { Biker } from "../model/biker.model";
import { BikerRepository } from "../model/biker.repository";
import { Observable } from "rxjs/Observable";
import { DatePipe } from '@angular/common';
import { Router } from "@angular/router";

@Component({
    selector: "dummy",
    moduleId: module.id,
    templateUrl: "dummy.component.html",
    styleUrls: ["dummy.component.css"]
})
export class DummyComponent {

    constructor(private repository: BikerRepository, private router: Router) { }

    get bikers(): Biker[] {
        return this.repository.getBikers();
    }

    deleteBiker(biker: Biker): Observable<Biker[]>  {
        console.log('entrou no component');
        return this.repository.deleteBiker(biker);
    }

    goToHelpPage() {
        this.router.navigateByUrl('/help');
    }
}