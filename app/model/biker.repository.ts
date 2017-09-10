import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Biker } from "./biker.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class BikerRepository {
    private bikers: Biker[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getBikers().subscribe(data => {
            this.bikers = data;
        })
    }
        
    getBikers(): Biker[] {
        return this.bikers;
    }

    saveBiker(biker: Biker): Observable<Biker> {
        return this.dataSource.saveBiker(biker);
    }

    deleteBiker(biker: Biker): Observable<Biker[]> {
        console.log('entrou no repository');
        return this.dataSource.deleteBiker(biker);
    }
}