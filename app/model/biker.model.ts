import { Injectable } from "@angular/core";

@Injectable()
export class Biker {
    public id: number;
    public fullname: string;
    public email: string;
    public city: string;
    public rideInGroup: string;
    public sun: boolean;
    public mon: boolean;
    public tue: boolean;
    public wed: boolean;
    public thu: boolean;
    public fri: boolean;
    public sat: boolean;
    public registration: number;

    setBikerObj(id: number, fullname: string, email: string, 
                city: string, rideInGroup: string, sun: boolean, 
                mon: boolean, tue: boolean, wed: boolean,
                thu: boolean, fri: boolean, sat: boolean, registration: number,): Biker { 
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
}