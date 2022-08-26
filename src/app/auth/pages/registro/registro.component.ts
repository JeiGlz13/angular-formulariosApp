import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
// import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {
  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.['required']) {
      return 'El email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El valor ingresado no tiene formato válido';
    } else if (errors?.['emailExiste']) {
      return 'El email ya está en uso';
    }

    return '';
  }



  public miFormulario: FormGroup = this._formBuilder.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this._validatorService.nombreApellidoPattern)]
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(this._validatorService.emailPattern)],
      [this._emailValidator]
    ],
    userName: [
      '',
      [Validators.required, this._validatorService.noPuedeSerStrider]
    ],
    password: [
      '',
      [Validators.required, Validators.maxLength(6)]
    ],
    password2: [
      '',
      [Validators.required]
    ],
  }, {
    validators: [this._validatorService.camposIguales('password', 'password2')]
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _validatorService: ValidatorService,
    private _emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
  }

  campoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched;
  }

  // emailError(key: string){
  //   return this.miFormulario.get('email')?.errors?.[key] &&
  //     this.miFormulario.get('email')?.touched;
  // }

  submitForm(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
