import { Routes } from '@angular/router';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/services', pathMatch: 'full' },
  { path: 'services', component: ServicesListComponent },
  { path: 'add-service', component: ServiceFormComponent },
  { path: 'edit-service/:id', component: ServiceFormComponent }
];