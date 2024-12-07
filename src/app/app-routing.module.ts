import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.componet';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { PagesComponent } from './pages/pages.component';

// Definícia ciest
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Presmerovanie na dashboard
  { path: 'dashboard', component: DashboardComponent }, // Cesta pre Dashboard
  { path: 'products', component: ProductsComponent }, // Cesta pre Products
  { path: 'settings', component: SettingsComponent }, // Cesta pre Settings
  { path: 'pages', component: PagesComponent }, // Cesta pre Pages
  { path: '**', redirectTo: '/dashboard' } // Fallback cesta (404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Registrácia ciest
  exports: [RouterModule] // Exportovanie pre použitie v AppModule
})
export class AppRoutingModule { }
