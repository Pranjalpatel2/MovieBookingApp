import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { User } from "../Login/user.model";

@Injectable({
    providedIn:'root'
})
export class LoginService {
    constructor(private http: HttpClient){}

    private url:string="https://localhost:44348/";

    //https://localhost:44348/registerUser
    Register(user:User){
       return this.http.post<any>(`${this.url}registerUser`,user);
    }
    //https://localhost:44348/api/User/Login
    Login(user:User){
        return this.http.post<any>(`${this.url}api/User/Login`,user);
    }
    GetUser(){
       return this.http.get<any>(`${this.url}api/User`);
    }
    //https://localhost:44348/getuser/{id}
    GetUserById(id:number){
        return this.http.get<any>(`${this.url}getuser/${id}`);
    }


}