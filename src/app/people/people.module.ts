import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { PeopleListComponent } from './components/people-list/people-list.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PeopleListContainerComponent } from './containers/people-list-container/people-list-container.component';
import { PersonFormContainerComponent } from './containers/person-form-container/person-form-container.component';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleResolverService } from './resolvers/people-resolver.service';
import { PersonResolverService } from './resolvers/person-resolver.service';
import { PeopleService } from './services/people.service';

@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleListContainerComponent,
    PersonFormComponent,
    PersonFormContainerComponent
  ],
  imports: [CommonModule, PeopleRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
  providers: [PeopleService, PeopleResolverService, PersonResolverService]
})
export class PeopleModule {}
