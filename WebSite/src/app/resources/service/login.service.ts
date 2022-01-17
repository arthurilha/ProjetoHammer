import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {RequestLogin } from '../models/RequestLogin'
import { Observable } from 'rxjs';
import {ResponseLogin} from '../models/ResponseLogin'
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  public doLogin(requestLogin: RequestLogin):Observable<ResponseLogin>{
      return this.httpClient.post<ResponseLogin>(`${environment.api}/Login`, requestLogin )    
  }
}
