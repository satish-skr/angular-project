import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Recommended } from 'src/app/models/recommended';
import { Favs } from 'src/app/models/fav';
import { FavouritesService } from 'src/app/services/favourites.service';
import { RecommendedService } from 'src/app/services/recommended.service';
import { CricapiService } from 'src/app/services/cricapi.service';
import { RouterService } from 'src/app/services/router.service';


@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
// favourite component will show favourite players and will have the option to remove Players from favs
export class FavsComponent implements OnInit {

  list : Array<Favs>;
  fav: Favs;
  recom: Recommended
  defaultImageUrl: string;

  // dependency injection of required services
  constructor(private favser : FavouritesService, private snackBar: MatSnackBar, 
    private recomser : RecommendedService, private cricapi : CricapiService, 
    private route: RouterService) {
    this.defaultImageUrl= '../../../assets/default.jpg';
   }

  // load all the favs of a particular user at the time of initialization
  ngOnInit(): void {
    this.favser.getData(sessionStorage.getItem('username'),sessionStorage.getItem('token')).subscribe(
      res => {
        if(res['imageURL'] == null)
        res['imageURL'] = this.defaultImageUrl;
        this.list = res;

        if(res.length === 0) {
          this.snackBar.open("No favourites", 'Add from Search', {duration: 1000});
        }
      },
      err => console.log(err)
    )    
  }

  // remove a player from favs of the particular user as well as send a decrease couter request to frontend
  removeFromFav(data){
    data.status = true;
    this.recomser.deleteData(data.pid, sessionStorage.getItem('token')).subscribe(
      res => this.favser.deleteDataUser(sessionStorage.getItem('username'), data.pid, sessionStorage.getItem('token')).subscribe(
        res => console.log(res),
        err => console.log(err)
      ),
      err => {
        if (err.statusText === "OK") {
          this.favser.deleteDataUser(sessionStorage.getItem('username'), data.pid, sessionStorage.getItem('token')).subscribe(
            res => {
              const index = this.list.indexOf(data);
              this.list.splice(index, 1);
            }
          )
          this.snackBar.open('Successfully removed', '', {duration: 1000});
        }
      }
    )
  }

}
