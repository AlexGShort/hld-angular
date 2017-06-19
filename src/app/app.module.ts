import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { VideolistComponent } from './videolist/videolist.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PressComponent } from './press/press.component';
import { DonationsComponent } from './donations/donations.component';
import { FuturePartnersComponent } from './future-partners/future-partners.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldmapComponent,
    VideolistComponent,
    AboutComponent,
    ContactComponent,
    PressComponent,
    DonationsComponent,
    FuturePartnersComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
