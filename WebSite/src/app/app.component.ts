import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebSite';

  constructor(private toast: ToastrService){

  }
  
  ativar(){
    this.toast.error("senha invalida")
  }

  desativar(){
    this.toast.success("cadastro concluido")
  }
}
