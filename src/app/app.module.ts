import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { ContactandfooterComponent } from './component/contactandfooter/contactandfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutmeComponent,
    ContactandfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
