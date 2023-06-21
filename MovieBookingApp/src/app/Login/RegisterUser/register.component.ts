import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/app/Services/login.services";
import { User } from "../user.model";
@Component({
    templateUrl:'./register.view.html',
    styleUrls:['./register.view.css']
})
export class RegisterComponent{
user:User=new User();
constructor(private formBuilder:FormBuilder,private service:LoginService,private router:Router){}
formValue!:FormGroup;
ngOnInit(){
    this.formValue=this.formBuilder.group({
        id:['',Validators.required],
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        confirm:['',Validators.required],
        phone:['',Validators.required]
    });
}   
    Register(){
        if(this.formValue.value.password!=this.formValue.value.confirm){
            alert('Password field and confirm password field is not same!');
            return ;
        }
        this.user.id=this.formValue.value.id;
        this.user.firstName=this.formValue.value.firstName;
        this.user.lastName=this.formValue.value.lastName;
        this.user.email=this.formValue.value.email;
        this.user.password=this.formValue.value.password;
        this.user.phone=this.formValue.value.phone;

        this.service.Register(this.user).subscribe(res=>{
            alert(res.message);
            this.router.navigate(['home']);
        },
        err=>{
            alert(err.message);
        })
    }
}