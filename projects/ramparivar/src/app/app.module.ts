import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { LeftPanelComponent } from './Components/Layout/left-panel/left-panel.component';
import { MainComponent } from './Components/main/main.component';
import { HomeComponent } from './Components/home/home.component';
import { ImageGalleryComponent } from './Components/image-gallery/image-gallery.component';
import { PastEventsComponent } from './Components/home/past-events/past-events.component';
import { UpcomingEventsComponent } from './Components/home/upcoming-events/upcoming-events.component';

import {HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './Components/about-us/about-us.component';

import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { LocationComponent } from './Components/contact/location/location.component';
import { SendmailComponent } from './Components/contact/sendmail/sendmail.component';

import { LoginComponent } from './Components/Auth/login/login.component';
import { SignupComponent } from './Components/Auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftPanelComponent,
    MainComponent,
    HomeComponent,
    ImageGalleryComponent,
    PastEventsComponent,
    UpcomingEventsComponent,
    AboutUsComponent,   
    ContactUsComponent,
    LocationComponent,
    SendmailComponent,  
    LoginComponent, SignupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
