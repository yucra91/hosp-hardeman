import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{
  intervalSubs: Subscription;


  constructor(){

    // const obs$ = new Observable(observer=>{
    //   let i = -1;
      
    //   const intervalo = setInterval(()=>{
    //     i++;
        
    //     observer.next(i);
    //     if (i===4) {
    //       clearInterval(intervalo);
    //       observer.complete();  
    //     }
    //     if (i===2) {
    //       i=0;
    //       observer.error('I llego al valor 2');
    //     }

    //   },1000)
    // })

    // this.returmObservable().pipe(retry(2)).subscribe(
    //   valor => console.log('Subs: ',valor),
    //   error => console.warn('Error ',error),
    //   () => console.info('obs terminado')
      
    // )
    this.intervalSubs  = this.retornaIntervalo().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
  retornaIntervalo(){
    return interval(100).
                        pipe(
                          // take(10),
                          map(valor => {return valor+1;}),
                          filter(value => (value % 2 === 0) ? true : false)
                        )
  }

  returmObservable():Observable<number>{
    let i = -1;
    const obs$ = new Observable<number>(observer=>{
      
      const intervalo = setInterval(()=>{
        i++;
        
        observer.next(i);
        if (i===4) {
          clearInterval(intervalo);
          observer.complete();  
        }
        if (i===2) {
          observer.error('I llego al valor 2');
        }

      },1000)
    })

    return obs$;
  }

}
