import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/**
 * All services which have to have one and only one instance per application (singleton services)
 * should be implemented here.
 */
@NgModule({
  imports: [CommonModule]
})
export class CoreModule { }
