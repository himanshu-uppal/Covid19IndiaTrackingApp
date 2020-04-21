import { Routes, RouterModule } from "@angular/router";
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewsComponent} from './news/news.component';
import {PrecautionsComponent} from './precautions/precautions.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    { path: "news", component: NewsComponent },
    { path: "precautions", component: PrecautionsComponent },
    { path: "login", component: LoginComponent },
 { path: "", component: DashboardComponent }]
export const routing = RouterModule.forRoot(routes);