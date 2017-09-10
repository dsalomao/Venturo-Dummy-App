import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Biker } from "./biker.model";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
    private bikers: Biker[] = [
        new Biker().setBikerObj(1, "Sauron", "thedark@lord.com", "Mordor", "Sometimes", true, true, true, true, true, true, true, 1505051436310),
        new Biker().setBikerObj(2, "Melkor", "truedark@lord.com", "Unknown", "Always", true, true, false, false, true, true, false, 1505051436310),
        new Biker().setBikerObj(3, "Iluvitar", "the@creator.com", "Unknown", "Always", true, true, true, true, true, true, true, 1505051436310),
        new Biker().setBikerObj(4, "Galndalf", "the@white.com", "Valinor", "Sometimes", true, false, false, false, false, false, true, 1505051436310),
        new Biker().setBikerObj(5, "Elrond", "the@white.com", "Valinor", "Never", false, true, true, true, true, true, false, 1505051436310)
    ];

    getBikers(): Observable<Biker[]> {
        return Observable.from([this.bikers]);
    }

    saveBiker(biker: Biker): Observable<Biker> {
        console.log(biker);
        return Observable.from([biker]);
    }

    deleteBiker(biker: Biker): Observable<Biker[]> {
        console.log(biker);
        return Observable.from([this.bikers]);
    }
}