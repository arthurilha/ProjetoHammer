import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../resources/service/auth.service';
import { LoginService } from '../../resources/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public camps = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    senha: new FormControl(null, [Validators.required, Validators.minLength(8)])
  });
   
  constructor(private loginService : LoginService, private to: ToastrService, private rota : Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  public doLogin(): void{
    
    this.loginService.doLogin(this.camps.value).subscribe(
      (success) =>{
        console.log(success)
        console.log(this.to.success("form saved successfully") )
        this.auth.salveToken(success.token)
        this.rota.navigate(["/Tabela"])
        
    },
    error =>{
      console.log(error)
      this.to.error('Invalid Login');
      //error.error.message
    })
  }
  
}




