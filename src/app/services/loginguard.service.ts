import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService {

  constructor(
    private playerService: AuthenticationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  canActivate() {
    if (!this.playerService.isTokenExpired()) {
      console.log('In CanActivate method');
      return true;
    }
    this.snackBar.open("Problem" , 'Try Logging out', { duration: 1000 });
    this.router.navigate(['/dashboard']);
    return false;
  }
}
