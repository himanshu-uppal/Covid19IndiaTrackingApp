import { Routes, RouterModule } from "@angular/router";
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewsComponent} from './news/news.component';
import {PrecautionsComponent} from './precautions/precautions.component';
import {LoginComponent} from './login/login.component';
import {AddNewsComponent} from './add-news/add-news.component';
import {StateWiseDataResolver} from './state-wise-data/state-wise-data-resolver.service';
import {AuthGuard} from './core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
    { path: "news", component: NewsComponent },
    { path: "precautions", component: PrecautionsComponent },
    { path: "login", component: LoginComponent },
 { path: "", component: DashboardComponent ,resolve:{covid19IndiaData:StateWiseDataResolver}},
 { path: "admin/dashboard", component: AdminDashboardComponent , canActivate: [AuthGuard]},
 { path: "admin/dashboard/news", component: AddNewsComponent , canActivate: [AuthGuard]}]
export const routing = RouterModule.forRoot(routes);