import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Movie } from "../Movies/movies.model";

@Injectable({
    providedIn:'root'
})
export class MovieService{

    constructor(private http:HttpClient){}
    private url:string="https://localhost:44348/";

    GetAllMovies():any{
        /*this.http.get<any>(`${this.url}api/Movie`).pipe(map((res:any)=>{
            return res;
        }))*/
        return this.http.get<any>(`${this.url}api/Movie`);
    }
    //https://localhost:44348/getmovie/{id}
    GetMovieById(id:number){
        return this.http.get<any>(`${this.url}getmovie/${id}`);
    }
    //https://localhost:44348/createMovie
    PostMovie(movie:Movie):any{
        /*this.http.post<any>(`${this.url}createMovie`,movie).pipe(map((res:any)=>{
            return res;
        }))*/
        return this.http.post<any>(`${this.url}createMovie`,movie);
    }
}