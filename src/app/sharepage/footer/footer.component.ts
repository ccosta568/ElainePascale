import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentRoute: string = '';

  links = [
    { path: 'videos', label: 'Videos' },
    { path: 'events', label: 'Events' },
    { path: 'haunts', label: 'Haunts' },
    { path: 'podcasts', label: 'Podcasts' },
    { path: 'interviews', label: 'Interviews' },
    { path: 'about', label: 'About' }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url.replace('/', ''); // Removes leading "/"
    });
  }
}

