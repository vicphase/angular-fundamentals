import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DataService } from './services/data.service';
import { LoadingService } from './services/loading.service';

/**
 * All services which have to have one and only one instance per application (singleton services)
 * should be implemented here.
 */
@NgModule({
  imports: [CommonModule],
  providers: [DataService, LoadingService]
})
export class CoreModule { }
