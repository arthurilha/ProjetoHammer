import { Component, OnInit } from '@angular/core';
import { RequestCadastro } from '../resources/models/RequestCadastro';
import { CadastroService } from '../resources/service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public requestCadastro: RequestCadastro;

  constructor(private cadastroService : CadastroService) { }

  ngOnInit(): void {
    this.requestCadastro = new RequestCadastro();
  }
  public doCadastro(): void{
    this.cadastroService.doCadastro(this.requestCadastro).subscribe(data =>{
        console.log(data)
    },
    error =>{
      console.error(error)
    })
  }

}
