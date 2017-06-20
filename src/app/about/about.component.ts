import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // providers: [SiteDataService],
})
export class AboutComponent implements OnInit {
    about: string;
  constructor(private siteDataService:SiteDataService) { }

  ngOnInit() {
      this.about = this.siteDataService.about;
  }

}
