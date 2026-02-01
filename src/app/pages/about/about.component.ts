import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('About Elaine Pascale | Horror Writer in Florida');
    this.meta.updateTag({
      name: 'description',
      content:
        'Learn about Elaine Pascale, an accomplished horror writer in Florida, the Godmother of Horror, and a traditionally published author with novels, short stories, podcasts, and interviews.'
    });
  }

}
