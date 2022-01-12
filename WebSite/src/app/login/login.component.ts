import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RequestLogin } from '../resources/models/RequestLogin';
import { LoginService } from '../resources/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin;
   
  constructor(private loginService : LoginService, private toastr: ToastrService ) { }

  ngOnInit(): void {
  this.requestLogin = new RequestLogin();
  }

  public doLogin(): void{
    this.loginService.doLogin(this.requestLogin).subscribe(success =>{
        console.log(this.toastr.success("login realizado"))
        
    },
    error =>{
      this.toastr.error(error.error.message);   
    })
  }
  
}




