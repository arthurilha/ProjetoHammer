import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestCadastro } from '../models/RequestCadastro';
import { ResponseCadastro } from '../models/ResponseCadastro';



@Injectable({
  providedIn: 'root'
})
export class CadastroService {
 

  constructor(private httpClient: HttpClient) { }

  public DoCadastro(requestCadastro: RequestCadastro){
      return this.httpClient.post('http://localhost:3000/api/v1/cadastro',requestCadastro )
   }
} 

