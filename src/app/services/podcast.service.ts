import { Injectable } from '@angular/core';

interface Podcast {
  id: number;
  title: string;
  description: string;
  src: string;
}

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  private podcasts: Podcast[] = [
    {
      id: 1,
      title: 'Final Girls: Protagonist or Problematic?',
      description: 'Discussing the trope of the "Final Girl" in horror films.',
      src: '../assets/audio/FinalGirl.mp3'
    },
    {
      id: 2,
      title: 'Ripped to Shreds',
      description: 'An in-depth look at the horror genre and its various facets.',
     src: '../assets/audio/RipShred.mp3'
    },
    {
      id: 3,
      title: 'Anne Rice Tribute Anthology',
      description: 'A tribute to the works of Anne Rice.',
      src: '../assets/audio/AnnRice.mp3'
    },
    {
      id: 4,
      title: 'Top 10 Post-2000 Vampire Films',
      description: 'Counting down the top 10 vampire films released after 2000.',
      src: '../assets/audio/Top10Vamp.mp3'
    },
    {
      id: 5,
      title: 'Marsha Casper Cook - A Good Story is a Good Story',
      description: 'Exploring what makes a story great.',
     src: '../assets/audio/MarthaCook.mp3'
    },
    {
      id: 6,
      title: 'Inebriart Podcast',
      description: 'Discussions on art and creativity, often with a drink in hand.',
      src: '../assets/audio/Ide.mp3'
    },
    {
      id: 7,
      title: 'Everybody Wants to F*ck the Vampire',
      description: 'An exploration of the allure of vampires in popular culture.',
      src: '../assets/audio/everybodyFvampire.mp3'
    },
    {
      id: 8,
      title: 'Do the Undead Pay Taxes?',
      description: 'A humorous take on the undead and everyday life.',
      src: '../assets/audio/dodeadtax.m4a'
    }
  ];

  constructor() { }

  getPodcasts(): Podcast[] {
    return this.podcasts;
  }

  getPodcastById(id: number): Podcast | undefined {
    return this.podcasts.find(podcast => podcast.id === id);
  }
}
