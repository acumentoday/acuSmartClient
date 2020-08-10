import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { config } from '../config';
import { mapTo, catchError,tap } from 'rxjs/operators';
import { Tokens } from './auth.model';
import { loginUser } from '../login/login.model';
import { base } from '../_helpers/variables';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser : string;
  constructor(private http : HttpClient) { }

  login(user: { username: string, password: string }) {
    return this.http.post<Tokens>(`${base}/login`, user)
    .pipe(
      tap((tokens) => {
        console.log(tokens);
        this.doLoginUser(user.username,tokens);
      }),
      mapTo(true)
    )
  }


  
  logoutUser() {
    // return this.http.post<any>(`${base}/refresh_token`, {

    // })
   this.doLogoutUser();
  }



  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.get<any>(`${base}/refresh_token`, { headers: new HttpHeaders({'Authorization': 'Bearer ' + this.getJwtToken()})}
    ).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.access_token);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    console.log(tokens);
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.access_token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

}
