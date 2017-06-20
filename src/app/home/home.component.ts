import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    byline;
  constructor(private siteDataService:SiteDataService) { }

  ngOnInit() {
      this.byline = this.siteDataService.byline;
  }

}
