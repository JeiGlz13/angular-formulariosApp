import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {
  public miFormulario: FormGroup = this._formBuilder.group({
    nombre: [
      '',
      [Validators.required, Validators.minLength(3)]
    ],
    favoritos: this._formBuilder.array(
      [
        ['The Legend of Zelda', Validators.required],
        ['Resident Evil', Validators.required],
      ],
      [Validators.required]
    ),
  });

  public nuevoFavorito: FormControl = this._formBuilder.control(
    '',
    [Validators.required]
  )

  get favoritosArray(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private _formBuilder: FormBuilder) { }

  campoEsValido(campo: string){
    return (
      this.miFormulario.controls[campo].touched &&
      this.miFormulario.controls[campo].errors
    )
  }

  agregarFavorito(){
    if (this.nuevoFavorito.invalid) return;

    this.favoritosArray.controls.push(new FormControl(this.nuevoFavorito.value, [Validators.required]));
    this.nuevoFavorito.reset();
  }

  eliminarFavorito(index: number){
    this.favoritosArray.removeAt(index);
  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
