import { Component, OnInit } from '@angular/core';
import { PodcastService } from 'src/app/services/podcast.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {

  podcasts: any[] = [];
  currentPodcastIndex = 0;

  constructor(private podcastService: PodcastService) { }

  ngOnInit() {
    this.podcasts = this.podcastService.getPodcasts();
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
