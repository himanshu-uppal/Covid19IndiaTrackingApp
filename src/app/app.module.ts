import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddNewsComponent } from './add-news/add-news.component';
import {HttpClientModule} from '@angular/common/http';
import { StateWiseDataComponent } from './state-wise-data/state-wise-data.component';
import {CovidIndiaDataService} from './core';
import {StateWiseDataResolver} from './state-wise-data/state-wise-data-resolver.service';
import {AuthenticationService} from './core';
import {AuthGuard} from './core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {NewsService} from './core'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewsComponent,
    PrecautionsComponent,
    LoginComponent,
    AddNewsComponent,
    StateWiseDataComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,routing, FormsModule, ReactiveFormsModule,HttpClientModule]
  ,
  providers: [
    CovidIndiaDataService,
    StateWiseDataResolver,
    AuthenticationService,
    AuthGuard,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
