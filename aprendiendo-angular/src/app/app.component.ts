import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'aprendiendo-angular y Javascript';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;
  public config;

  constructor(){
    this.title= Configuracion.titulo;
    this.descripcion =  Configuracion.descripcion;
    this.config = Configuracion;
  }

  ocultarVideojuegos(value: boolean){
    this.mostrar_videojuegos = value;
  }
}
