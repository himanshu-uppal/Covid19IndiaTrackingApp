import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router,
    CanActivate
} from "@angular/router";
import { AuthenticationService } from "./authentication.service";
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private auth: AuthenticationService) { }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (!this.auth.authenticated()) {
            console.log('not authenticated');
            this.router.navigateByUrl("");
            return false;
        }
        console.log('authenticated');
        return true;
    }
}