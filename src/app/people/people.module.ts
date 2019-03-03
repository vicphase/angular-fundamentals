import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleListContainerComponent } from './containers/people-list-container/people-list-container.component';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleResolverService } from './resolvers/people-resolver.service';
import { PeopleService } from './services/people.service';

@NgModule({
  declarations: [PeopleListComponent, PeopleListContainerComponent],
  imports: [CommonModule, PeopleRoutingModule, SharedModule, FormsModule],
  providers: [PeopleService, PeopleResolverService]
})
export class PeopleModule {}
