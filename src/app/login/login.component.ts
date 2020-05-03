import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from '../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 public username: string;
 public password: string;
 public errorMessage: string;

 constructor(private route:ActivatedRoute,private authenticationService:AuthenticationService,private router:Router) {}

 authenticate(form: NgForm) {
 if (form.valid) {
  let isValidUser = this.authenticationService.authenticateUser(this.username, this.password)
  if(isValidUser) {
    localStorage['isAuthenticated'] = 1;
  this.router.navigateByUrl("/admin/dashboard");
  }else {
    this.errorMessage = "Invalid user details";
    }
 } else {
 this.errorMessage = "Invalid form details";
 }
 }

 
}
