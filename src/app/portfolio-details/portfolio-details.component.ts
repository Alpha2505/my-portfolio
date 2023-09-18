import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  //styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Portfolio Details - Personal Bootstrap Template");
  }

  ngOnInit(): void {
  }

}
