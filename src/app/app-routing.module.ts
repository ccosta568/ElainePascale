import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { WihmComponent } from './pages/wihm/wihm.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'books',component:BooksComponent},
  {path:'about',component:AboutComponent},
  {path:'youtube',component:YoutubeComponent},
  {path:'interviews',component:InterviewsComponent},
  {path:'wihm',component:WihmComponent},
  {path:'podcasts',component:PodcastsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
