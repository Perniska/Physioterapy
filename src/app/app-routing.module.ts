import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importy komponentov
import {DashboardComponent} from './dashboard/dashboard.componet';
import {ProductsComponent} from './products/products.component';
import {SettingsComponent} from './settings/settings.component';
import {PagesComponent} from './pages/pages.component';

// Importovanie ciest
import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
