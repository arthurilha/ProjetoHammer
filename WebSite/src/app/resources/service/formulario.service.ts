import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RequestFormulario } from '../models/RequestFormulario';
import { Observable } from 'rxjs';
import { ResponseFormulario } from '../models/ResponseFormulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
 

  constructor(private httpClient: HttpClient) { }
 
  public getForm():Observable<RequestFormulario>{
    return this.httpClient.get<RequestFormulario>(`${environment.api}/Formulario`)
  }

   public doForm(RequestFormulario: RequestFormulario):Observable<ResponseFormulario>{
      return this.httpClient.post<ResponseFormulario>(`${environment.api}/Formulario`, RequestFormulario )    
  }
}