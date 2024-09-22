import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module'; // For routing

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  // Declare the header component here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Make sure the routing module is included
  ],
  providers: [],
  bootstrap: [AppComponent]  // AppComponent is the entry point
})
export class AppModule { }
