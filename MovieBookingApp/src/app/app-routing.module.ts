import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooking } from './Bookings/AddBooking/addbooking.component';
import { BookingComponent } from './Bookings/bookings.component';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Login/RegisterUser/register.component';
import { AddMovie } from './Movies/AddMovie/addmovie.component';
import { MovieComponent } from './Movies/movies.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'booking',component:BookingComponent},
  {path:'movie',component:MovieComponent},
  {path:'home',component:HomeComponent},
  {path:'addmovie',component:AddMovie},
  {path:"addbooking/:id",component:AddBooking},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
