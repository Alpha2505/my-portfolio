import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/nav-tabs/about/about.component';
import { ResumeComponent } from './home/nav-tabs/resume/resume.component';
import { ServicesComponent } from './home/nav-tabs/services/services.component';
import { PortfolioComponent } from './home/nav-tabs/portfolio/portfolio.component';
import { ContactComponent } from './home/nav-tabs/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioDetailsComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
