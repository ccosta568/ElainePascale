import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { HauntsComponent } from './pages/haunts/haunts.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EventsComponent } from './pages/events/events.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      seo: {
        title: 'Elaine Pascale | Horror Writer in Florida | Godmother of Horror',
        description: 'Elaine Pascale is an accomplished horror writer in Florida, the Godmother of Horror, author of novels and short stories, featured on podcasts and videos, and a frequent guest at Florida comic cons and reading panels. Traditionally published and active in Women in Horror Month.',
        path: '/'
      }
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      seo: {
        title: 'About Elaine Pascale | Horror Writer in Florida',
        description: 'Learn about Elaine Pascale, an accomplished horror writer in Florida, the Godmother of Horror, and a traditionally published author with novels, short stories, podcasts, and interviews.',
        path: '/about'
      }
    }
  },
  {
    path: 'videos',
    component: YoutubeComponent,
    data: {
      seo: {
        title: 'Video Appearances | Elaine Pascale Horror Writer',
        description: 'Watch video appearances featuring Elaine Pascale, an accomplished horror writer in Florida and the Godmother of Horror.',
        path: '/videos'
      }
    }
  },
  {
    path: 'interviews',
    component: InterviewsComponent,
    data: {
      seo: {
        title: 'Interviews | Elaine Pascale Horror Writer',
        description: 'Read interviews and features about Elaine Pascale, an accomplished horror writer in Florida and the Godmother of Horror.',
        path: '/interviews'
      }
    }
  },
  {
    path: 'haunts',
    component: HauntsComponent,
    data: {
      seo: {
        title: 'Haunts | Women in Horror Month | Elaine Pascale',
        description: 'Explore Women in Horror Month resources and related projects connected to Elaine Pascale, the Godmother of Horror.',
        path: '/haunts'
      }
    }
  },
  {
    path: 'podcasts',
    component: PodcastsComponent,
    data: {
      seo: {
        title: 'Podcasts | Elaine Pascale Horror Writer',
        description: 'Listen to podcast appearances featuring Elaine Pascale, the Godmother of Horror and an accomplished horror writer in Florida.',
        path: '/podcasts'
      }
    }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: {
      seo: {
        title: 'Events | Florida Comic Cons & Readings | Elaine Pascale',
        description: 'In-person events featuring Elaine Pascale, the Godmother of Horror. Find Florida comic cons, panels, and readings.',
        path: '/events'
      }
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      seo: {
        title: '404 | Elaine Pascale',
        description: 'Page not found on the Elaine Pascale horror writer website.',
        robots: 'noindex, nofollow'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
