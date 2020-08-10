import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registerUser } from './register.model';
import { base } from '../_helpers/variables';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });

  getRegisterRes(userDetails: registerUser) {
    return this.http
      .post<registerUser>(`${base}/signup`, {
        username: userDetails.username,
        password: userDetails.password,
      })
  }


}
