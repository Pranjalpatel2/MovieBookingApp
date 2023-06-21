import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BookingService } from "../Services/booking.service";
import { Booking } from "./booking.model";

@Component({
    templateUrl:'./booking.view.html',
    styleUrls:['./booking.view.css']
})
export class BookingComponent{
    constructor(private service:BookingService,private router:Router){}

    Bookings:Array<Booking>=new Array<Booking>();
    ngOnInit(){
        this.service.GetBooking().subscribe((res :any)=>{
            this.Bookings=res;
        },
        (err:any)=>{
            alert(err);
        })
    }
    Back(){
      this.router.navigate(['/home']);
    }
    
}