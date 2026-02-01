import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Video Appearances | Elaine Pascale Horror Writer');
    this.meta.updateTag({
      name: 'description',
      content:
        'Watch video appearances featuring Elaine Pascale, an accomplished horror writer in Florida and the Godmother of Horror.'
    });
  }

}
