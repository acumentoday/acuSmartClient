import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { httpErrorInterceptor } from './_helpers/http-error.interceptor';
import { AuthGuard } from './_guards/auth.guard';
import { RandomGuard } from './_guards/random.guards';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent
    ],
  imports: [
    CommonModule,
    BrowserTransferStateModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard,RandomGuard,authInterceptorProviders,httpErrorInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
