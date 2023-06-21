import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { MovieService } from "src/app/Services/movies.service";
import { Movie } from "../movies.model";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
    selector:'app-addMovie',
    templateUrl:'./addmovie.view.html',
    styleUrls:['./addmovie.view.css']
})
export class AddMovie implements OnInit{
    constructor(private service:MovieService,private formBuilder:FormBuilder, private router:Router){}

    formValue!:FormGroup;
    ngOnInit(){
        this.formValue=this.formBuilder.group({
           // Id:[''],
            movieName:[''],
            theatreName:[''],
            tickets:[''],
            isTicketAvailable:['']
        })
    }
    movie:Movie=new Movie();

    AddMovie(){
        this.movie.movieName=this.formValue.value.movieName;
        this.movie.theatreName=this.formValue.value.theatreName;
        this.movie.tickets=this.formValue.value.tickets;
        this.movie.isTicketAvailable=true;
        this.movie.totalTickets=this.formValue.value.tickets;

       this.service.PostMovie(this.movie).subscribe((res:any)=>{
            alert(res)
        },
        (err:any)=>{
            alert(err)
        })
        this.router.navigate(['/movie']);
    }
}