import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TabelaComponent } from './tabela/tabela.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path:'', component: CadastroComponent},
  {path:'Login', component: LoginComponent},
  {path:'Tabela', component:TabelaComponent},
  {path:'Formulario', component: FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
