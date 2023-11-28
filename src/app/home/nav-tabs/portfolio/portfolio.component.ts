import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  //styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  opentab(event:any){
    this.showinterestssection = false;

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
    }
    else{
      this.showinterestssection = true;
      this.router.navigate(['home']);
    }
  
  }

}
