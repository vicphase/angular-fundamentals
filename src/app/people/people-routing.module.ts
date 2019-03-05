import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleListContainerComponent } from './containers/people-list-container/people-list-container.component';
import { PersonFormContainerComponent } from './containers/person-form-container/person-form-container.component';
import { PeopleResolverService } from './resolvers/people-resolver.service';
import { PersonResolverService } from './resolvers/person-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PeopleListContainerComponent,
    resolve: { resolvedPeople: PeopleResolverService }
  },
  {
    path: 'new-person',
    component: PersonFormContainerComponent
  },
  {
    path: ':id',
    component: PersonFormContainerComponent,
    resolve: { resolvedPerson: PersonResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
