import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  books ={};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    
      this.getbookByISBN(this.route.snapshot.params['isbn']);
      
  }

   getbookByISBN(isbn) {
    this.http.get('/book/isbn/'+isbn)
    .subscribe(data => {
      this.books = data;
    });
  }

}


