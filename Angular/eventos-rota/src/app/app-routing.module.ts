import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ErroComponent } from './components/erro/erro.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "eventos", component: CadastroComponent },
  { path: "home", component: HomeComponent },
  { path: "**", component: ErroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
