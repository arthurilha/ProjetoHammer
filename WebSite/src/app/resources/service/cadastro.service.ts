import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestCadastro } from '../models/RequestCadastro';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CadastroService {
 

  constructor(private httpClient: HttpClient) { }

  public DoCadastro(requestCadastro: RequestCadastro){
      return this.httpClient.post(`${environment.api}/Cadastro`,requestCadastro )
   }
} 

