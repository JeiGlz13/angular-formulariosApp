import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  public persona: Persona = {
    nombre: 'Jeisson',
    favoritos: [
      {
        id: 1,
        nombre: 'The Legend of Zelda'
      },
      {
        id: 2,
        nombre: 'God of War'
      }
    ]
  }

  public nuevoJuego: string = '';

  guardar(){
    console.log('Formulario envíado');
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }

}
