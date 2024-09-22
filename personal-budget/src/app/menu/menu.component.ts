import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pb-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [RouterModule]  // Add RouterModule to handle the routerLink directive
})
export class MenuComponent { }
