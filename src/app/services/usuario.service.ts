import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
// http://localhost:3001/api/usuarios
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient,
               private router: Router,) { }

  // validarToken(): Observable<boolean>{
  //   const token = localStorage.getItem('token') || '';

  //   return this.http.get(`${base_url}/auth/renew`, {
  //     headers:{
  //       'x-token':token
  //     }
  //   }).pipe(
  //     tap( (resp:any) =>{
  //       localStorage.setItem('token', resp.token);
  //     }),
  //     map( resp => true),
  //     catchError( error => of(false))
  //   );

  //   // return of(false);
  // }

  validarToken(): Observable<boolean>{
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/auth/renew`, {
      headers:{
        'Authorization': `Bearer ${token}`
      }
    }).pipe(
      tap( (resp:any) =>{
        console.log({resp});
        
        localStorage.setItem('token', resp.token);
      }),
      map( resp => true),
      catchError( error => of(false))
    );
}

  crearUsuario( formData: RegisterForm ){
    return this.http.post(`${base_url}/usuarios`, formData)
            .pipe(
              tap( (resp:any) => {
                localStorage.setItem('token', resp.token)
              }))
    
  }
 
  // login( formData: LoginForm ){
  //   return this.http.post(`${base_url}/login`, formData)
  //           .pipe(
  //             tap( (resp:any) => {
  //               localStorage.setItem('token', resp.token)
  //             }))
  // }
  login( formData: LoginForm ){
    return this.http.post(`${base_url}/auth/login`, formData)
            .pipe(
              tap( (resp:any) => {                
                localStorage.setItem('token', resp.token)
              }))
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  loginGoogle( token: string ){
    return this.http.post(`${base_url}/login/google`,{token})
          .pipe(
            tap( ( resp: any ) => {
              console.log(resp);
              
              localStorage.setItem('token', resp.token )
            })
          )
  }
}
