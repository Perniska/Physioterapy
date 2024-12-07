import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.componet';
import {ProductsComponent} from './products/products.component';
import {SettingsComponent} from './settings/settings.component';
import {PagesComponent} from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    SettingsComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Importovanie routing modulu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
