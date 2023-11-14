import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

  @Input('valor') progress:number=40;
  @Input() btnClass:string='btn-primary';
  
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
  
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }
   // cambiarValor(valor: number): number {
   //   if (this.progress >=0 && valor >= 0 ) {
   //     return this.progress = 100;
   //   }
   //   if (this.progress <=0 && valor < 0 ) {
   //     return this.progress = 100;
   //   }
   //   this.progress = this.progress + valor; 
   // }
 
   cambiarValor(valor: number): number {
     if (this.progress >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
       this.progress = 100;
     } else if (this.progress <= 0 && valor < 0) {
      this.valorSalida.emit(0);
       this.progress = 0;
     } else {
       this.progress += valor;
       this.valorSalida.emit(this.progress);
     }
     
     return this.progress;
   }
   onChange(nuevoValor: number){
     if (nuevoValor >= 100) {
        this.progress = 100;  
      }
      else if (nuevoValor <= 0) {
        this.progress = 0;
      } else {
        this.progress = nuevoValor;
      }
    // console.log(valor);
    this.valorSalida.emit(this.progress);
   }
}
