import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
   encapsulation: ViewEncapsulation.None
})

export class BookComponent implements OnInit {
  books: any;

  // constructor(private http: HttpClient) { }
  book: any = {};// added router for delete fuction
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    //  this.http.get('http://localhost:3000/books').subscribe(data => {
    this.http.get('/book').subscribe(data => {
      this.books = data;
      // this.ngOnInit();
    });
  }

  deleteBook(id) {
    this.http.delete('/book/' + id)
      .subscribe(res => {
        this.ngOnInit();

        // this.router.navigate(['/books']); //need to reload
      }, (err) => {
        console.log(err);
      }
      );
  }

saveBook() {
    this.http.post('/book', this.book)
      .subscribe(res => {
          let id = res['_id'];
         // this.router.navigate(['/books']);
         this.ngOnInit();

        }, (err) => {
          console.log(err);
        }
      );
  }

}





