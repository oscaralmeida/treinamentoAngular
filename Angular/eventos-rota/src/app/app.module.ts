import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubLista } from './filters/sublista.filter';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ErroComponent } from './components/erro/erro.component';

// SERVICES
import { EventosService } from "./services/eventos.service";

@NgModule({
  
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CadastroComponent,
    ErroComponent,
    SubLista
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
