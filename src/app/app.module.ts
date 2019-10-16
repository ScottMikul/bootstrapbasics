import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainfeaturesComponent } from './mainfeatures/mainfeatures.component';
import { CheckoutbuttonComponent } from './checkoutbutton/checkoutbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainfeaturesComponent,
    CheckoutbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
