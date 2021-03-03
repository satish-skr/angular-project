import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { RegisterUser } from './register';
import { UserService } from 'src/app/services/user.service';
import { UserAuth } from 'src/app/models/userAuth';

@Component({
  selector: 'app-logsign',
  templateUrl: './logsign.component.html',
  styleUrls: ['./logsign.component.css']
})
export class LogsignComponent implements OnInit {

  loginform: FormGroup;

  user: RegisterUser;
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  @Input() enabled:boolean = true;
  @Output() loggedIn = new EventEmitter<UserAuth>();

  constructor(public formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private authService: AuthenticationService,
    private userService: UserService,
    private route: Router,
    private snackBar: MatSnackBar,) {
      
    console.log("constructor Called");
    this.loginform = formBuilder.group({
      userEmail:
        ['', Validators.required],
      userPassword: ['', Validators.required]
    })

    console.log("constructor Called");
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      userName: ['', Validators.required],
      userEmail: ['', Validators.required],
      userPassword: ['', [Validators.required, Validators.minLength(8)]]
    });

    document.querySelector('.img__btn').addEventListener('click', function () {
      document.querySelector('.cont').classList.toggle('s--signup');
    });


  }

  loginUser() {
    console.log("Login  Submit");
    console.log(this.loginform.value);

    this.authService.authenticationLogin(this.loginform.value).
      subscribe(data => {
        console.log(data);
        this.authService.setBearerToken(data["token"])
        sessionStorage.setItem("username", this.loginform.value.userEmail);
        if (data.statusText == "OK") {
          console.log("Routing Works");
          this.snackBar.open('Success', 'Logged in', {duration: 1000});
          this.route.navigate(['/dashboard'])

        } 
      });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {

    console.log("Login  Submit");
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return "error";
    }
    this.loading = true;

    console.log(this.registerForm.value)

    this.user = this.registerForm.value;
    this.userService.addUser(this.registerForm.value)

      .subscribe(
        data => {
          this.snackBar.open('Success', 'Try Signing in', {duration: 1000});
          this.route.navigate(['/login']);

        });
  }

}
