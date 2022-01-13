import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit(): void {
  }

  forTable(){
    this.rota.navigate(["/Tabela"])
  }
  logout(){
    this.rota.navigate(["/Login"])
  }

}
