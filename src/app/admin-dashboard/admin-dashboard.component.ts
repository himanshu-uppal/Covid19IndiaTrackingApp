import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.clear();
    this.router.navigateByUrl("/");
    }

}
