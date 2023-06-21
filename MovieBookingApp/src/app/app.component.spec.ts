import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Booking } from './Bookings/booking.model';
import { RegisterComponent } from './Login/RegisterUser/register.component';
import { User } from './Login/user.model';
import { MovieComponent } from './Movies/movies.component';
import { Movie } from './Movies/movies.model';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MovieBookingApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MovieBookingApp');
  });

  /*it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('MovieBookingApp app is running!');
  });
  it('should create the movie component instance',()=>{
    const fixture=TestBed.createComponent(MovieComponent);
    const app=fixture.componentInstance;
    expect(app).toBeTruthy();
  });*/
  it('should create user instance',()=>{
    let user=new User();
    expect(user).toBeTruthy();
  });
  it('should create movie instance',()=>{
    let movie=new Movie();
    expect(movie).toBeTruthy();
  });
  it('should create booking instance',()=>{
    let booking=new Booking();
    expect(booking).toBeTruthy();
  });
});
