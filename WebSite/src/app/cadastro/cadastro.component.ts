import { Component, OnInit,} from '@angular/core';
import { RequestCadastro } from '../resources/models/RequestCadastro';
import { CadastroService } from '../resources/service/cadastro.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  

  public camps = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    nome: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    endereco: new FormControl(null),
    telefone: new FormControl(null),
    senha: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    senhaTwo: new FormControl(null, [Validators.required]),
  });

  //cosntrutor
  constructor(private cadastroService : CadastroService,private toastr: ToastrService) { }


  ngOnInit(): void {}


  ///função
  public doCadastro(): void{
    if(this.camps.value.senha !== this.camps.value.senhaTwo){
      this.toastr.error('different passwords, please retype');
      return;
    }
    this.cadastroService.DoCadastro(this.camps.value).subscribe(
      (success) => {
        console.log(success)
        this.toastr.success('successful registration');
        
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );

    }
  }  
  


