import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Empty route for base URL
  { path: 'home', component: HomeComponent }  // Route for /home
];