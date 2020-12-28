import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './common/components/sidenav/sidenav.component';
import { MaterialModule } from './common/modules/material/material.module';
import { LayoutComponent } from './common/components/layout/layout.component';
import { CustomerManagementComponent } from './customer/components/customer-management/customer-management.component';
import { DatatableModule } from './common/modules/datatable/datatable.module';
import { CustomerFormComponent } from './customer/components/customer-form/customer-form.component';
import { CustomHttpService } from './common/services/custom-http.service';
import { CustomerService } from './customer/services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerForecastComponent } from './customer/components/customer-forecast/customer-forecast.component';
import { ChartsModule } from './common/modules/charts/charts.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    LayoutComponent,
    CustomerManagementComponent,
    CustomerFormComponent,
    CustomerForecastComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    DatatableModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [CustomHttpService, CustomerService],
  bootstrap: [AppComponent],
  entryComponents: [CustomerFormComponent]
})
export class AppModule { }
