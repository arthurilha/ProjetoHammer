import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/resources/service/formulario.service';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { ResponseFormulario } from 'src/app/resources/models/ResponseFormulario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(private forms: FormularioService, private toast : ToastrService) { }

  form = new FormArray([]);
  input : ResponseFormulario[];

  ngOnInit(): void {
  }

  
  
  public update(){

    this.forms.getForm().subscribe((res:ResponseFormulario[]) => {

      this.form = new FormArray([]);
      res.forEach(n => {
        this.form.push(new FormControl(n.valor,[Validators.required]))
        //this.forms.push(new FormControl(n.valor, [Validators.required]));
      })
      this.input = res;
    })
  }

  salve(){
    const sv = this.form.value.map((n: any, index: any) => {
      console.log(n);
      return {
        valor: n,
        tipo: this.input[index].tipo,
        id: this.input[index].id
      }
    })
    this.forms.postForm(sv).subscribe(() => {
         console.log(this.toast.success('form saved successfully'));
          setTimeout(() => {
          location.reload();
        }, 500);
      },
      (error) => {
        this.toast.error(error.error.message);
      }
    );

  }


}
