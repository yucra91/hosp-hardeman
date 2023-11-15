import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';

import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { AlertComponent } from './alert/alert.component';




@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
  ],
  exports:[
    IncrementadorComponent,
    DonaComponent,
  ]
})
export class ComponentsModule { }
