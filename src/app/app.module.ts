import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import routing modulu
import { AppComponent } from './app.component'; // Hlavný komponent
import { DashboardComponent } from './dashboard/dashboard.componet';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [ // Komponenty deklarované v tomto module
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    SettingsComponent,
    PagesComponent
  ],
  imports: [ // Importovanie iných modulov
    BrowserModule,
    AppRoutingModule // Modul s definíciami routingu
  ],
  providers: [], // Servisy (ak sú potrebné)
  bootstrap: [AppComponent] // Hlavný bootstrap komponent
})
export class AppModule { }
