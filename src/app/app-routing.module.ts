import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { AboutComponent } from './home/nav-tabs/about/about.component';
import { PortfolioComponent } from './home/nav-tabs/portfolio/portfolio.component';
import { ResumeComponent } from './home/nav-tabs/resume/resume.component';
import { ContactComponent } from './home/nav-tabs/contact/contact.component';
import { ServicesComponent } from './home/nav-tabs/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'services', component: ServicesComponent},
  { path: `portfolioinfo/:id`, component: PortfolioDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

