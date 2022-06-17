import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from 'src/app/services/book-details.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:BookDetailsService ) { }
  bookData:any;
  ngOnInit(): void {
    this.bookData = this.service.bookDetails;
  }

}
