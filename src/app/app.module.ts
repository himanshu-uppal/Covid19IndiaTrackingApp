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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewsComponent,
    PrecautionsComponent,
    LoginComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,routing, FormsModule, ReactiveFormsModule]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
