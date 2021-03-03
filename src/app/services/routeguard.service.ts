import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, CanActivate } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate{

  constructor(
    private playerService: AuthenticationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  canActivate() {
    if (this.playerService.isTokenExpired()) {
      console.log('In CanActivate method');
      return true;
    }
    this.snackBar.open("Problem" , 'Try Logging in', { duration: 1000 });
    this.router.navigate(['/login']);
    return false;
  }
}
