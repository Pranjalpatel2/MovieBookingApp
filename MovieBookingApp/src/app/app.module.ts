import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBooking } from './Bookings/AddBooking/addbooking.component';
import { BookingComponent } from './Bookings/bookings.component';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Login/RegisterUser/register.component';
import { AddMovie } from './Movies/AddMovie/addmovie.component';
import { MovieComponent } from './Movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieComponent,
    BookingComponent,
    AddMovie,
    AddBooking,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
