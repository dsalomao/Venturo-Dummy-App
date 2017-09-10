import { Component } from "@angular/core";
import { NgForm } from "@angular/forms"
import { BikerRepository } from "../model/biker.repository";
import { Biker } from "../model/biker.model";

@Component({
    selector: "registration",
    moduleId: module.id,
    templateUrl: "registration.component.html",
    styleUrls: ["registration.component.css"]
})
export class RegistrationComponent {
    bikerSent: boolean = false;
    submitted: boolean = false;
    constructor(public repository: BikerRepository, public biker: Biker) {}

    get bikers(): Biker[] {
        return this.repository.getBikers();
    }

    submitBiker(form: NgForm) {
        this.biker.sun ? this.biker.sun = true: this.biker.sun = false;
        this.biker.mon ? this.biker.mon = true: this.biker.mon = false;
        this.biker.tue ? this.biker.tue = true: this.biker.tue = false;
        this.biker.wed ? this.biker.wed = true: this.biker.wed = false;
        this.biker.thu ? this.biker.thu = true: this.biker.thu = false;
        this.biker.fri ? this.biker.fri = true: this.biker.fri = false;
        this.biker.sat ? this.biker.sat = true: this.biker.sat = false;
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
}