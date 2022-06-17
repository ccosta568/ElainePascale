import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from 'src/app/services/book-details.service'; 
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private service:BookDetailsService) { }
  bookData:any;
  ngOnInit(): void {
    this.bookData = this.service.bookDetails;
  }

}
