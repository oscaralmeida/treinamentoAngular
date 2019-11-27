import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  titulo_empresa: string = "Impacta Treinamentos";
  titulo_home: string = "Home";
  titulo_principal: string = "Gestão de Eventos";

  constructor() { }

  ngOnInit() {
  }

}
