import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router, Event} from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  tituloSubs$: Subscription;
  titulo:string='';
  constructor(private router:Router){

    this.tituloSubs$ = this.getArgumentoRuta()
                      .subscribe(({titulo})=> {
                        this.titulo=titulo;
                          document.title=`HospHdm - ${titulo}`;

                      });

  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentoRuta(){
    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd),
        filter((evento: Event) => (evento as ActivationEnd).snapshot.firstChild === null),
        map((evento: Event) => (evento as ActivationEnd).snapshot.data)

      )
  }

}
