import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class UserService {

    private readonly path = "/user";
    
    constructor(private _httpClient: HttpClient) { }

    check(token: string) {
        return this._httpClient.post(`${environment.backurl}${this.path}/check`, {token: token}, {withCredentials: true});
    }

    // example about how to secure endpoint
    test() {
        return this._httpClient.get(`${environment.backurl}${this.path}/testCookie`, {withCredentials: true});
    }
    
    logOut() {
        return this._httpClient.get(`${environment.backurl}${this.path}/logout`, {withCredentials: true});
    }
    
}