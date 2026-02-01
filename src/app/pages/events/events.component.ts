import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Events | Florida Comic Cons & Readings | Elaine Pascale');
    this.meta.updateTag({
      name: 'description',
      content:
        'In-person events featuring Elaine Pascale, the Godmother of Horror. Find Florida comic cons, panels, and readings.'
    });
  }

}
