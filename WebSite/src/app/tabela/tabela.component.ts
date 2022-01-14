import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  constructor(private rota : Router) { }

  ngOnInit(): void {
  }
 
  forForm(){
    this.rota.navigate(["/Formulario"])
  }
   logout(){
    localStorage.removeItem('token')
    this.rota.navigate(['/Login'])
  }
}
