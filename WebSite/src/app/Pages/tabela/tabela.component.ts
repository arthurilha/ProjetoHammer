import { Component, OnInit } from '@angular/core';
import { TabelaService } from 'src/app/resources/service/tabela.service';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  
  public itens: any;
  public coluns: string[]


  constructor(private table: TabelaService) { }


  ngOnInit(): void {
  }

  public update():void{
    this.table.getTable().subscribe((res) =>{
    
      this.coluns = Object.keys(res[0]);
      this.itens = res;
     
    })
  }
}
