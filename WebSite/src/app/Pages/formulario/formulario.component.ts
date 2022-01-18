import { Component, OnInit } from '@angular/core';
import { RequestFormulario } from 'src/app/resources/models/RequestFormulario';
import { FormularioService } from 'src/app/resources/service/formulario.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public campo : RequestFormulario
 
  constructor(private form: FormularioService) { }

  ngOnInit(): void {
  }

  public update():void{
    this.form.getForm().subscribe((res=>{
      this.campo = res
    }))
  }
}
