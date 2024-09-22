import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component'; // Import the component

@Component({
  selector: 'pb-home',
  standalone: true,
  imports: [BreadcrumbsComponent],  // Add BreadcrumbsComponent to imports
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
