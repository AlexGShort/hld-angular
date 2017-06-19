import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { VideolistComponent } from './videolist/videolist.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PressComponent } from './press/press.component';
import { DonationsComponent } from './donations/donations.component';
import { FuturePartnersComponent } from './future-partners/future-partners.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'press', component: PressComponent },
    { path: 'videos', component: VideolistComponent },
    { path: 'donations', component: DonationsComponent },
    { path: 'future-partners', component: FuturePartnersComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
