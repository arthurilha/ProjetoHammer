import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { TabelaComponent } from './Pages/tabela/tabela.component';
import { FormularioComponent } from './Pages/formulario/formulario.component';
import { RotaGuard } from './resources/service/rotaguard.service';


const routes: Routes = [
  {path:'Login', component: LoginComponent},
  {path:'Cadastro', component: CadastroComponent},
  {path:'Tabela', component:TabelaComponent, canActivate:[RotaGuard]},
  {path:'Formulario', component: FormularioComponent, canActivate:[RotaGuard]},
  {path:'**', redirectTo: 'Login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//`${enviroment.api}`