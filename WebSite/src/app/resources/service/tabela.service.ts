import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RequestTabela } from '../models/RequestTabela';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {
 

  constructor(private httpClient: HttpClient) { }
 
  public getTable():Observable<RequestTabela[]>{
    return this.httpClient.get<RequestTabela[]>(`${environment.api}/Tabela`)
  }
}