import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Booking } from "../Bookings/booking.model";

 @Injectable({
    providedIn:'root'
 })
export class BookingService{
    constructor(private http:HttpClient){}

    private url:string="https://localhost:44348/";

    //https://localhost:44348/createBooking
    PostBooking(booking:any):any{
        console.log(`${this.url}createBooking`);
        /*this.http.post<any>(`${this.url}createBooking`,booking).pipe(map((res:any)=>{
            console.log(res);
            return res;
        }))*/ 
        return this.http.post<any>(`${this.url}createBooking`,booking);
    }

    GetBooking():any{
        console.log(`${this.url}api/Booking`);
        //this.http.get<any>(`${this.url}api/Booking`).pipe(map((res:any)=>{
            //return res;
            //console.log(res);
            //return res;
       // }))
       return this.http.get<any>(`${this.url}api/Booking`);
    }
    //https://localhost:44348/getbooking/101
    GetBookingById(id:string){
       return this.http.get<any>(`${this.url}getbooking/${id}`);
    }

}