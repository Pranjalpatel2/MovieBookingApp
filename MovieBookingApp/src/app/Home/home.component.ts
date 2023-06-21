import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    templateUrl:'./home.view.html',
    styleUrls:['./home.view.css']
})
export class HomeComponent implements OnInit{
    constructor(private router:Router){}
    ngOnInit(){
        console.log('entered in home controller');
    }
    Movie(){
       this.router.navigate(['movie']);
    }
    Booking(){
        this.router.navigate(['booking']);
    }
}