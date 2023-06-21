import { Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../Services/login.services";
import { User } from "./user.model";

@Component({
    selector:'app-root',
    templateUrl:'./login.view.html',
    styleUrls:['./login.view.css']
})
export class LoginComponent implements OnInit{
  constructor(private service: LoginService,private formBuilder: FormBuilder, private router:Router){}

  formValue!:FormGroup;
  user:User=new User();
  ngOnInit(){
    this.formValue=this.formBuilder.group({
        firstName:['',Validators.required],
       // lastName:['',Validators.required],
        password:['',Validators.required]
    })
    console.log('entered inside login component');
  }
  Login(){
    this.user.firstName=this.formValue.value.firstName;
   // this.user.lastName=this.formValue.value.lastName;
    this.user.password=this.formValue.value.password;
    this.user.id=111;
    this.service.Login(this.user).subscribe(res=>{
      if(res.message=='User Logged in Successfully!!'){
        this.router.navigate(['home']);
      }
      console.log(res);
      alert(res.message);
    },
    err=>{
      alert(err);
    }
    );
    //this.router.navigate(['home']);
  }

}