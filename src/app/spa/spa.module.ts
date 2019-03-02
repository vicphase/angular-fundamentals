import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaRoutingModule } from './spa-routing.module';
import { SpaComponent } from './components/spa/spa.component';

@NgModule({
  declarations: [SpaComponent],
  imports: [
    CommonModule,
    SpaRoutingModule
  ]
})
export class SpaModule { }
