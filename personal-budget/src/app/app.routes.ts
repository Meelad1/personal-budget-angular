import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ChartComponent } from './chart/chart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },          // Default route for the homepage
  { path: 'contact', component: ContactComponent }, // Route for the contact page
  { path: 'charts', component: ChartComponent },    // Route for the chart page
];
