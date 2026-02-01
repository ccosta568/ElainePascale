import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-haunts',
  templateUrl: './haunts.component.html',
  styleUrls: ['./haunts.component.scss']
})
export class HauntsComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Haunts | Women in Horror Month | Elaine Pascale');
    this.meta.updateTag({
      name: 'description',
      content:
        'Explore Women in Horror Month resources and related projects connected to Elaine Pascale, the Godmother of Horror.'
    });
  }

  
}
