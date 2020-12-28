import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerForecastComponent } from './customer/components/customer-forecast/customer-forecast.component';
import { CustomerManagementComponent } from './customer/components/customer-management/customer-management.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'clientes', component: CustomerManagementComponent},
  { path: 'proyeccion', component: CustomerForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
