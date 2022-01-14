import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit(): void {
  }

   
  forForm(){
    this.rota.navigate(["/Formulario"])
  }
  forTable(){
    this.rota.navigate(["/Tabela"])
  }
  logout(){  
    localStorage.removeItem('token')
    this.rota.navigate(['/Login'])
  }
}
