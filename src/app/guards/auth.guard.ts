import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);
  return usuarioService.validarToken().pipe(
    tap( estaAutenticado =>{
      if ( !estaAutenticado ) {
          router.navigateByUrl('/login');
      }
    })
  );
};

// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable, tap } from 'rxjs';
// import { UsuarioService } from '../services/usuario.service';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate{
//   constructor(private usuarioService: UsuarioService,
//               private router: Router,){}
//   CanActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot) {
//       return this.usuarioService.validarToken()
//               .pipe(
//                 tap( estaAutenticado => {
//                   if ( !estaAutenticado ) {
//                     this.router.navigateByUrl('/login');
//                   }
//                 })
//               );
//     }
  
// };


// import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// // import { UsuarioService } from '../services/usuario.service';

// export const authGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): Observable<boolean | UrlTree> => {
//   // Inyecta el servicio UsuarioService y el Router en el constructor
//   constructor(private usuarioService: UsuarioService, private router: Router) {}

//   // Aquí puedes agregar la lógica de autenticación
//   // utilizando tu servicio UsuarioService
//   return this.usuarioService.validarToken().pipe(
//     map((estaAutenticado: boolean) => {
//       if (!estaAutenticado) {
//         // Redirige a la página de inicio de sesión si no está autenticado
//         return this.router.createUrlTree(['/login']);
//       }
//       return true;
//     })
//   );
// };


// Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
