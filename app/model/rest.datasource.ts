import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Biker } from "./biker.model";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getBikers(): Observable<Biker[]> {
        return this.sendRequest(RequestMethod.Get, "bikers");
    }

    saveBiker(biker: Biker): Observable<Biker> {
        return this.sendRequest(RequestMethod.Post, "bikers", biker);
    }

    deleteBiker(biker: Biker): Observable<Biker> {
        console.log(biker);
        return this.sendRequest(RequestMethod.Delete, "bikers", biker);
    }

    private sendRequest(verb: RequestMethod, url: string, body?: Biker): Observable<Biker> {
        return this.http.request(new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        })).map(response => response.json());
    }
}