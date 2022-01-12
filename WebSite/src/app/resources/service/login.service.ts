import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {RequestLogin } from '../models/RequestLogin'
import { Observable } from 'rxjs';
import {ResponseLogin} from '../models/ResponseLogin'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public doLogin(requestLogin: RequestLogin):Observable<ResponseLogin>{
      return this.httpClient.post<ResponseLogin>('http://localhost:3000/api/v1/login', requestLogin )
  }
}
