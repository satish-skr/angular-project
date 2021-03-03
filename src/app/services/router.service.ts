import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  //dependency injection of Router and Location services
  constructor(private router: Router, private location: Location) { }

  // method to load the dashboard component
  todashboard(){
    this.router.navigate(["/dashboard"])
  }

  // method to go to sign up form
  tosignup(){
    this.router.navigate(["/signup"])
  }

  // method to go to login form
  tologin(){
    this.router.navigate(["/login"])
  }
  toFavs(){
    this.router.navigate(["/favs"])
  }

  back(){
    this.location.back();
  }

  tostatOpener(pid){
    this.router.navigate(['statOpener',pid,'view'])
  }
}
