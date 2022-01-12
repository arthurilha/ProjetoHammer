import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestCadastro } from '../models/RequestCadastro';
import { ResponseCadastro } from '../models/ResponseCadastro';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {
 

  constructor(private httpClient: HttpClient) { }

  public doCadastro(requestCadastro: RequestCadastro):Observable<ResponseCadastro>{
      return this.httpClient.post<ResponseCadastro>('http://localhost:3000/api/v1/cadastro', requestCadastro )
   }
} 

