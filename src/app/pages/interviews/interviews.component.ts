import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Interviews | Elaine Pascale Horror Writer');
    this.meta.updateTag({
      name: 'description',
      content:
        'Read interviews and features about Elaine Pascale, an accomplished horror writer in Florida and the Godmother of Horror.'
    });
  }

}
