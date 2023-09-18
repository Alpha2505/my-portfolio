import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hometab: string = 'home';
  abouttab: string = 'about';
  resumetab: string = 'resume';
  servicestab: string = 'services';
  portfoliotab: string = 'portfolio';
  contacttab: string = 'contact';
  header: string = 'header';
  homenavtab: string = 'hometab';
  aboutnavtab: string = 'abouttab';
  resumenavtab: string = 'resumetab';
  servicesnavtab: string = 'servicestab';
  portfolionavtab: string = 'portfoliotab';
  contactnavtab: string = 'contacttab';
  showinterestssection: boolean = false;

  constructor(private titleService:Title) {
    this.titleService.setTitle("Personal Bootstrap Template");
  }

  ngOnInit(): void {
  }

  opentab(event:any){
    this.showinterestssection = false;
    var hometab = document.getElementById(this.hometab);
    var abouttab = document.getElementById(this.abouttab);
    var resumetab = document.getElementById(this.resumetab);
    var servicestab = document.getElementById(this.servicestab);
    var contacttab = document.getElementById(this.contacttab);
    var portfoliotab = document.getElementById(this.portfoliotab);
    var homenavtab = document.getElementById(this.homenavtab);
    var aboutnavtab = document.getElementById(this.aboutnavtab);
    var resumenavtab = document.getElementById(this.resumenavtab);
    var servicesnavtab = document.getElementById(this.servicesnavtab);
    var contactnavtab = document.getElementById(this.contactnavtab);
    var portfolionavtab = document.getElementById(this.portfolionavtab);
    var header = document.getElementById(this.header);

    header?.classList.add('header-top');
      abouttab?.classList.remove('section-show');
      hometab?.classList.remove('section-show');
      resumetab?.classList.remove('section-show');
      servicestab?.classList.remove('section-show');
      contacttab?.classList.remove('section-show');
      portfoliotab?.classList.remove('section-show');
      aboutnavtab?.classList.remove('active');
      homenavtab?.classList.remove('active');
      resumenavtab?.classList.remove('active');
      servicesnavtab?.classList.remove('active');
      contactnavtab?.classList.remove('active');
      portfolionavtab?.classList.remove('active');

    if(event.target.name == this.abouttab){
      abouttab?.classList.add('section-show');
      aboutnavtab?.classList.add('active');
    }
    else if(event.target.name == this.resumetab){
      resumetab?.classList.add('section-show');
      resumenavtab?.classList.add('active');
    }
    else if(event.target.name == this.servicestab){
      servicestab?.classList.add('section-show');
      servicesnavtab?.classList.add('active');
    }
    else if(event.target.name == this.contacttab){
      contacttab?.classList.add('section-show');
      contactnavtab?.classList.add('active');
    }
    else if(event.target.name == this.portfoliotab){
      portfoliotab?.classList.add('section-show');
      portfolionavtab?.classList.add('active');
    }
    else{
      this.showinterestssection = true;
      hometab?.classList.add('section-show');
      homenavtab?.classList.add('active');
      header?.classList.remove('header-top');
    }
  
  }

}
