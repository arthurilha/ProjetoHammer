import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { TabelaComponent } from './Pages/tabela/tabela.component';
import { FormularioComponent } from './Pages/formulario/formulario.component';
import {HttpClientModule} from '@angular/common/http'
import { RotaGuard } from './resources/service/rotaguard.service';
import { HeaderComponent } from './Pages/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    TabelaComponent,
    FormularioComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 

  ],
  providers: [
   RotaGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
