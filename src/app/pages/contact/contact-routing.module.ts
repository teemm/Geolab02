import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  //   children: [
  //     {
  //       path: 'contact1',
  //       component: Contact1Component
  //     },
  //     {
  //       path: 'contact2',
  //       component: Contact2Component
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: 'childrens'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}
