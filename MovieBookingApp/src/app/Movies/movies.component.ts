import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MovieService } from "../Services/movies.service";
import { Movie } from "./movies.model";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
    selector:'app-movies',
    templateUrl:'./movies.view.html',
    styleUrls:['./movies.view.css']
})
export class MovieComponent implements OnInit{

    //formGroup, FormBuilder

constructor(private service:MovieService,private router:Router ){}
    Movies: Array<Movie>=new Array<Movie>();
    //router object, service object, httpClient
    ngOnInit():void{
        this.service.GetAllMovies().subscribe((res:Array<Movie>)=>{
            this.Movies=res;
            },
                (err: any)=>{
                alert(err);
            })
    }

    Back(){
       this.router.navigate(['/home']);
    }
   
    //this.Movies=res;
}
