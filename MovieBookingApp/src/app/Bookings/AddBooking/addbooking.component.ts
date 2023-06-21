import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Movie } from "src/app/Movies/movies.model";
import { BookingService } from "src/app/Services/booking.service";
import { MovieService } from "src/app/Services/movies.service";
import { Booking } from "../booking.model";
import { ReactiveFormsModule } from "@angular/forms";
import { SelectorMatcher } from "@angular/compiler";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl:'./addbooking.view.html',
    styleUrls:['./addbooking.view.css']
})
export class AddBooking implements OnInit{
    constructor(private service:BookingService,private formBuilder:FormBuilder, private movieService:MovieService,private router:ActivatedRoute){}
    booking:Booking=new Booking();
    Movie:Movie=new Movie();
    formValue!:FormGroup;
    ngOnInit(){
         this.formValue=this.formBuilder.group({
            movieName:[''],
            id:[''],
            theatreName:[''],
            seatNumber:[''],
            category:['']
         })
        console.log(this.router.snapshot.params['id']);
        this.movieService.GetMovieById(this.router.snapshot.params['id']).subscribe(res=>{
            this.Movie=res;
        },err=>{
            alert(err.message);
        });

       
    }

    Submit(){
        this.booking.id=this.formValue.value.id;
        this.booking.movieName=this.Movie.movieName;
        this.booking.theatreName=this.Movie.theatreName;
        this.booking.seatNumber=this.formValue.value.seatNumber;
        this.booking.category=this.formValue.value.category;
         console.log(this.booking);
        this.service.PostBooking(this.booking).subscribe((res:any)=>{
            alert(res)
        },
        (err:any)=>{
            alert(err)
        });
        //display booking done successfully!!
        //navigate to home page
    }

}