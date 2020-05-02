import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { IUser } from '../models'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    authenticateUser(username: string, password: string) {

        console.log('logging in user');

        if (username === 'himanshu' && password === 'himanshu') {           
            return true;
        }

        return false;
    }

    authenticated(): boolean {
        console.log('in auth guard');
        let isAuthenticated = localStorage.getItem('isAuthenticated');
console.log('authenticated' + isAuthenticated);
        if (isAuthenticated)
            return true;
            console.log('returning false');
        return false;

    }

    clear(): void {
        localStorage.removeItem('isAuthenticated')
    }

} 