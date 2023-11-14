import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  
  labels1:string[] = [
    'Pan',
    'Refresco',
    'Tacos',
  ];

  public data1 = {
    labels: this.labels1,

    datasets: [{
      data: [10, 15, 40],
      backgroundColor: [
        '#FF5800',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      // hoverOffset: 4
    }]
  };
}
