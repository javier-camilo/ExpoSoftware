import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Observable, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../User/models/user';
import { LoginRequest } from '../User/models/login-request'
import { throwMatDuplicatedDrawerError } from '@angular/material';
import { Estudiante } from '../comite/estudiante/models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string;

  constructor( private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
     }

  registerUser(user : User): Observable<User>{
    return this.http.post<User>(this.baseUrl + 'api/Users', user)
    .pipe(
      tap(_ => this.handleErrorService.handleError<User>('Registrar usuario', null)),
      catchError(this.handleErrorService.handleError<User>('Registrar Usuario', null))
    );
  }

  loginUser(loginRequest : LoginRequest) : Observable <User>{
    return this.http.post<User>(this.baseUrl + 'api/Users/Login', loginRequest)
    .pipe(
      tap(_ => this.handleErrorService.handleError<User>('Registrar usuario', null)),
      catchError(this.handleErrorService.handleError<User>('Registrar Usuario', null))
    );
  }


}
