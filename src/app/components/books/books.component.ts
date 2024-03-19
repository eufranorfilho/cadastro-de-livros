import { Component } from '@angular/core';
import { book } from '../../../Book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  book: book = {} as book;  
  isUpdate: boolean = false;
  idCount: number =1;

  books: book[] = [
  ]

saveBook(){
    if(!this.isUpdate){
    this.book.id = this.idCount
    this.idCount++
    this.books.push(this.book);
    }
    this.book = {} as book;
    this.isUpdate = false;  
  }

      
updateBook(selectedBook:book){
  this.book = selectedBook;
  this.isUpdate = true;
}

removeBook(removeBook: book){
  this.books = this.books.filter(b =>  b !== removeBook)
}      
}

