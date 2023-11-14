import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
@Input() title:string='Sales'

@Input('labels') doughnutChartLabels: string[] = [
    'Labe1',
    'Label2',
    'Label3',
  ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,

    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#FF5800',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      // hoverOffset: 4
    }]
  };

}
