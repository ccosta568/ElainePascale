import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { HauntsComponent } from './pages/haunts/haunts.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'books',component:BooksComponent},
  {path:'about',component:AboutComponent},
  {path:'videos',component:YoutubeComponent},
  {path:'interviews',component:InterviewsComponent},
  {path:'haunts',component:HauntsComponent},
  {path:'podcasts',component:PodcastsComponent},
  {path: '**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
