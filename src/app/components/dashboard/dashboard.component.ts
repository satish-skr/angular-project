import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Player } from 'src/app/models/player';
import { RouterService } from 'src/app/services/router.service';
import { CricapiService } from 'src/app/services/cricapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  list: Array<Player> = [];
  defaultImageUrl: string;
  name: string;

 constructor(private route: RouterService,private cricapi: CricapiService, private snackBar: MatSnackBar) {
  this.defaultImageUrl= '../../../assets/default.jpg';
 }
 
  ngOnInit(): void { 
    var name:string = sessionStorage.getItem('username');
    $(document).ready(function() {
      $(window).on('scroll', function() {
       if($(window).scrollTop() < 1000) {
         $('.hero').css('background-size', 130 + '%');
         $('.hero h1').css('top', 50 + ($(window).scrollTop() * .1) + '%');
         $('.hero h1').css('opacity', 1 - ($(window).scrollTop() * .003));
       }
        
        if($(window).scrollTop() >= $('.content-wrapper').offset().top - 300) {
          $('.nav-bg').removeClass('bg-hidden');
          $('.nav-bg').addClass('bg-visible');
        } else {
          $('.nav-bg').removeClass('bg-visible');
          $('.nav-bg').addClass('bg-hidden');
        }
     });
   });
   }


  logout(){
    this.snackBar.open('Logged Out', '', {duration: 1000});
    sessionStorage.clear();
    this.route.tologin();
  }
  
  routeToSearch(){
    this.route.todashboard();
  }
}
