import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/schedule/add-contact/add-contact.component';
import { ListContactsComponent } from './components/schedule/list-contacts/list-contacts.component';

const routes: Routes = [
  {path: 'add-contact', component: AddContactComponent},
  {path: 'list-contacts', component: ListContactsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'list-contacts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
