import { Component, OnInit,} from '@angular/core';
import { RequestCadastro } from '../resources/models/RequestCadastro';
import { CadastroService } from '../resources/service/cadastro.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  
  

  public requestCadastro: RequestCadastro;

  constructor(private cadastroService : CadastroService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.requestCadastro = new RequestCadastro();
  }
  public doCadastro(): void{
    this.cadastroService.doCadastro(this.requestCadastro).subscribe(sucess =>{
      console.log(this.toastr.success("Cadastro concluido"))
      
    },
    error =>{
      
      this.toastr.error(error.error.message)
      
    })
  }

  
  

}
