import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router, ActivatedRoute } from '@angular/router';
import { appconstants } from '../Constants/app-constants';

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
  header1: string = 'header1';
  homenavtab: string = 'hometab';
  aboutnavtab: string = 'abouttab';
  resumenavtab: string = 'resumetab';
  servicesnavtab: string = 'servicestab';
  portfolionavtab: string = 'portfoliotab';
  contactnavtab: string = 'contacttab';
  linkedURL : string = appconstants.LinkedinprofileURL;
  githubURL : string = appconstants.GithubURL;

  constructor(private titleService:Title, private router: Router, private route: ActivatedRoute) {
    this.titleService.setTitle("Personal Website");
  }

  ngOnInit(): void {
    var header = document.getElementById(this.header);
    header?.classList.remove('header-top');
    var homenavtab = document.getElementById(this.homenavtab);
    var aboutnavtab = document.getElementById(this.aboutnavtab);
    var resumenavtab = document.getElementById(this.resumenavtab);
    var servicesnavtab = document.getElementById(this.servicesnavtab);
    var contactnavtab = document.getElementById(this.contactnavtab);
    var portfolionavtab = document.getElementById(this.portfolionavtab);

      aboutnavtab?.classList.remove('active');
      homenavtab?.classList.add('active');
      resumenavtab?.classList.remove('active');
      servicesnavtab?.classList.remove('active');
      contactnavtab?.classList.remove('active');
      portfolionavtab?.classList.remove('active');
  }

  opentab(event:any){
    debugger;
    var homenavtab = document.getElementById(this.homenavtab);
    var header = document.getElementById(this.header);

      header?.classList.add('header-top');

    if(event.target.name == this.abouttab){
      this.router.navigate(['about']);
    }
    else if(event.target.name == this.resumetab){
      this.router.navigate(['resume']);
    }
    else if(event.target.name == this.servicestab){
      this.router.navigate(['services']);
    }
    else if(event.target.name == this.contacttab){
      this.router.navigate(['contact']);
    }
    else if(event.target.name == this.portfoliotab){
      this.router.navigate(['portfolio']).then(()=>{
        window.location.reload();
      });
    }
    else{
      homenavtab?.classList.add('active');
      header?.classList.remove('header-top');
    }
  
  }

}
