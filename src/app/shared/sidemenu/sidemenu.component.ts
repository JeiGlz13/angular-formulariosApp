import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class SidemenuComponent {
  public templateItems: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basicos',
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './template/switches',
    },
  ];

  public reactiveItems: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos',
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches',
    },
  ];

  public authItems: MenuItem[] = [
    {
      texto: 'Login',
      ruta: './auth/login',
    },
    {
      texto: 'Registro',
      ruta: './auth/registro',
    },
  ]
}

