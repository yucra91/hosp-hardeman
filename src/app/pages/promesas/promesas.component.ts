import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit{
  ngOnInit(): void {
    this.getUser().then(usuario => console.log(usuario)
    );
    // const promesa = new Promise(( resolve, reject)=>{
    //   if (false) {
    //     resolve('hola mundo');
        
    //   }else {
    //     reject('Algo salio mal');
    //   }
    // });

    // promesa.then((mensaje)=>{
    //   console.log(mensaje);
      
    // }). catch( errror => console.log('Error en mi promesa ', errror));

    // console.log('Fin del init');
    
  }

  getUser(){
    // fetch('https://reqres.in/api/users')
    // .then(resp => resp.json())
    // .then(body => console.log(body.data))
 return new Promise(resolve => {

   fetch('https://reqres.in/api/users')
       .then(resp => resp.json())
       .then(body => resolve(body.data))
 })
  }

}
