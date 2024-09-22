import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pb-root',
  templateUrl: './app.component.html',
  imports: [HeaderComponent, MenuComponent, HeroComponent, RouterModule], // Add HeroComponent here
  standalone: true
})
export class AppComponent { }
