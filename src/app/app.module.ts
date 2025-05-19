import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { HauntsComponent } from './pages/haunts/haunts.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EventsComponent } from './pages/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    YoutubeComponent,
    InterviewsComponent,
    HauntsComponent,
    PodcastsComponent,
    NotFoundComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
