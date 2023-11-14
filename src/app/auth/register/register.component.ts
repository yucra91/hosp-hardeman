import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formSubmitted = false;

  public registerForm:FormGroup = this.fb.group({
    nombre :    [ 'Pedro', [ Validators.required, Validators.minLength(3) ] ],
    email :     [ 'pedro@gmail.com', [ Validators.required, Validators.email ]],
    password :  [ '12345', [ Validators.required ]],
    password2 : [ '12345', [ Validators.required ]],
    termino :   [ false, [ Validators.required ]],
  }, { 
    validators: this.passwordsIguales( 'password', 'password2' )
  });

  constructor( private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private router: Router ){}

  crearUsuario(){
    this.formSubmitted = true;
    console.log( this.registerForm.value );
    if ( this.registerForm.invalid ) {
      return;  
    }

    // realizar el posteo
    this.usuarioService.crearUsuario( this.registerForm.value )
    .subscribe( resp => {
      console.log('usuario creado');
      this.router.navigateByUrl('/')
      
    }, (err) => {
      // si sucede un error
      Swal.fire({
        title: 'Error!',
        text: err.error.msg,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    });
    
  }

  campoNoValido( campo: string ):boolean{
    if ( this.registerForm.get(campo)?.invalid && this.formSubmitted ) {
      return true;
    }else{

      return false
    }
  }

  contrasenaNoValida(){
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;
    if ( (pass1 !== pass2) && this.formSubmitted ) {
      return true;
    }else{return false;}
  }

  aceptarTermino() {
    const terminoControl = this.registerForm.get('termino');
    return terminoControl ? !terminoControl.value && this.formSubmitted : false;
  }

  passwordsIguales( pass1Name: string, pass2Name: string ){
    return ( formGroup: FormGroup) =>{
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);
      
      if ( pass1Control?.value === pass2Control?.value ) {
        pass2Control?.setErrors(null);
      }else{
        pass2Control?.setErrors({noEsIgual:true})
      }

    }
  }

}
