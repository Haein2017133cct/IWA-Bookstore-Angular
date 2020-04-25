import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookSearchComponent } from './book-search/book-search.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
    data: { title: 'Book List' }
  },
    {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
 {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-search/:author',
    component: BookSearchComponent,
    data: { title: 'Book Search' }
  }
  ,

  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookEditComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
