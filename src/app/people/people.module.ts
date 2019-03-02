import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleListContainerComponent } from './containers/people-list-container/people-list-container.component';

@NgModule({
  declarations: [PeopleListComponent, PeopleListContainerComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
