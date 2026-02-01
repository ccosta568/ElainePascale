import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PodcastService } from 'src/app/services/podcast.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {

  podcasts: any[] = [];
  currentPodcastIndex = 0;

  constructor(
    private podcastService: PodcastService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.podcasts = this.podcastService.getPodcasts();
    this.title.setTitle('Podcasts | Elaine Pascale Horror Writer');
    this.meta.updateTag({
      name: 'description',
      content:
        'Listen to podcast appearances featuring Elaine Pascale, the Godmother of Horror and an accomplished horror writer in Florida.'
    });
  }

next() {
  this.currentPodcastIndex = (this.currentPodcastIndex + 1) % this.podcasts.length;
  // Update the audio source and play the next podcast
}

previous() {
  this.currentPodcastIndex =
    (this.currentPodcastIndex - 1 + this.podcasts.length) % this.podcasts.length;
  // Update the audio source and play the previous podcast
}
}
