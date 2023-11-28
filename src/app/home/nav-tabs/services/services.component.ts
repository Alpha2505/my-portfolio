import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  //styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
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
    }
    else if(event.target.name == this.contacttab){
      this.router.navigate(['contact']);
    }
    else if(event.target.name == this.portfoliotab){
      this.router.navigate(['portfolio1']);
    }
    else{
      this.showinterestssection = true;
      this.router.navigate(['home']);
    }
  
  }

}
