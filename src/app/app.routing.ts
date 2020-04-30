import { Routes, RouterModule } from "@angular/router";
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewsComponent} from './news/news.component';
import {PrecautionsComponent} from './precautions/precautions.component';
import {LoginComponent} from './login/login.component';
import {AddNewsComponent} from './add-news/add-news.component';

const routes: Routes = [
    { path: "news", component: NewsComponent },
    { path: "precautions", component: PrecautionsComponent },
    { path: "login", component: LoginComponent },
 { path: "", component: DashboardComponent },
 { path: "admin/news", component: AddNewsComponent }]
export const routing = RouterModule.forRoot(routes);