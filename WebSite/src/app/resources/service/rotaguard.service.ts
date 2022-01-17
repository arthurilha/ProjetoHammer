import { Injectable } from "@angular/core";
import {  CanActivate, Router } from "@angular/router";
import {AuthService} from './auth.service'



@Injectable({
  providedIn: 'root'
})
export class RotaGuard implements CanActivate {

  constructor( private auth : AuthService, private rota: Router){}


  canActivate(): boolean {

    const pegouToken = this.auth.takeToken()
   

    if(!pegouToken){
      this.rota.navigate(["Login"])
    }
    
    return pegouToken;
    
  }





}