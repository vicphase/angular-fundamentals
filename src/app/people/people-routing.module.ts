import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleListContainerComponent } from './containers/people-list-container/people-list-container.component';
import { PeopleResolverService } from './resolvers/people-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PeopleListContainerComponent,
    resolve: { resolvedPeople: PeopleResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
