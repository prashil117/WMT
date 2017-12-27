import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CarComponent } from './car/car.component';
import { TravelerComponent } from './traveler/traveler.component';
import { PaymentComponent } from './payment/payment.component';
import { HotelComponent } from './hotel/hotel.component';
import { SucessPaymentComponent } from './sucess-payment/sucess-payment.component';
import { Nf404Component } from './nf-404/nf-404.component';
import { LoadingComponent } from './loading/loading.component';
import { CarDetailComponent } from './car-detail/car-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarComponent,
    TravelerComponent,
    PaymentComponent,
    HotelComponent,
    SucessPaymentComponent,
    Nf404Component,
    LoadingComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
