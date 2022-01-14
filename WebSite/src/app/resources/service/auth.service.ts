import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseLogin } from "../models/ResponseLogin";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(){}


  public logado():boolean{
    return Boolean(localStorage.getItem('token'))
  }

  salveToken(token: string){
    return localStorage.setItem('token',token)
  }


}
 