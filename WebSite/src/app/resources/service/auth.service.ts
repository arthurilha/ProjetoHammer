import { Injectable } from "@angular/core";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(){}


  takeToken():boolean{
    return Boolean(localStorage.getItem('token'))
  }

  salveToken(token: string){
    return localStorage.setItem('token',token)
  }


}
 