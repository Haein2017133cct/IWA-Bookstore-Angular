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
    
      this.getbookByAuthor(this.route.snapshot.params['author']);
  }

   getbookByAuthor(author) {
    this.http.get('/book/author/'+author)
    .subscribe(data => {
      this.books = data;
    });
  }

}


