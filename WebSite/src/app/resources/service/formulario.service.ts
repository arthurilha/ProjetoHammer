import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RequestFormulario } from '../models/RequestFormulario';
import { Observable } from 'rxjs';
import { ResponseFormulario } from '../models/ResponseFormulario';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  push(arg0: FormControl) {
    throw new Error('Method not implemented.');
  }
 

  constructor(private httpClient: HttpClient) { }
 
  public getForm():Observable<ResponseFormulario[]>{
    return this.httpClient.get<ResponseFormulario[]>(`${environment.api}/Formulario`)
  }

   public postForm(Response: ResponseFormulario):Observable<RequestFormulario>{
      return this.httpClient.post<RequestFormulario>(`${environment.api}/Formulario`, Response )    
  }
}