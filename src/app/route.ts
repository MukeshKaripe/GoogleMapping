import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // HomeComponent

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Default path for the home page
  { path: 'home', component: HomeComponent },  // Explicit 'home' route
];
