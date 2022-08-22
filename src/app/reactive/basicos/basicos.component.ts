import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl(''),
  //   precio     : new FormControl(0),
  //   existencias: new FormControl(0),
  // });

  public miFormulario: FormGroup = this._formBuilder.group({
    nombre: [
      '',
      [Validators.required, Validators.minLength(3)],
    ],
    precio: [
      0,
      [Validators.min(0)],
    ],
    existencia: [
      0,
      [Validators.min(0)],
    ],
  })

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.miFormulario.reset({
        nombre: 'RTX',
        precio: 1500,
        existencia: 3,
      })
  }

  campoEsValido(campo: string){
    return (
      this.miFormulario.controls[campo].touched &&
      this.miFormulario.controls[campo].errors)
  }

  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
