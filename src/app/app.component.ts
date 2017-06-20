import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SiteDataService } from './site-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SiteDataService],
})
export class AppComponent {
    constructor(private siteDataService: SiteDataService) {};

    title = this.siteDataService.title;
    byline = this.siteDataService.byline;
}
