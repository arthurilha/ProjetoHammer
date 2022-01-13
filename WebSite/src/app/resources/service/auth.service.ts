import { Injectable } from "@angular/core";
import { ResponseLogin } from "../models/ResponseLogin";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(){}


  public loginResponse : ResponseLogin


  public logado():boolean{
    return Boolean(this.loginResponse?.jwt)
  }
}
 