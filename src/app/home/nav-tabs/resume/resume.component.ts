import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { appconstants } from 'src/app/Constants/app-constants';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  //styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
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
  linkedURL : string = appconstants.LinkedinprofileURL;
  githubURL : string = appconstants.GithubURL;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  opentab(event:any){
    this.showinterestssection = false;

    if(event.target.name == this.abouttab){
      this.router.navigate(['about']);
    }
    else if(event.target.name == this.resumetab){
    }
    else if(event.target.name == this.servicestab){
      this.router.navigate(['services']);
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
