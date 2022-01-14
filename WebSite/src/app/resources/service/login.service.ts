import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {RequestLogin } from '../models/RequestLogin'
import { Observable, tap } from 'rxjs';
import {ResponseLogin} from '../models/ResponseLogin'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  public doLogin(requestLogin: RequestLogin):Observable<ResponseLogin>{
      return this.httpClient.post<ResponseLogin>('http://localhost:3000/api/v1/login', requestLogin )
      
      
  }
}
