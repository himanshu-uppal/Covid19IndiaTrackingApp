import { Component } from '@angular/core';
import { AuthenticationService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CovidTrackingApp';

  constructor(private authService:AuthenticationService){

  }

  authenticated(){
    return this.authService.authenticated();
  }
}
