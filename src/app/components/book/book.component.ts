import { Component, EventEmitter, Input, Output} from '@angular/core';
import { book } from '../../../Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  @Input()
  book : book = {} as book;

  @Output()
  saveEmiter = new EventEmitter();
  removeEmiter = new EventEmitter();


  save(){
    this.saveEmiter.emit();
  }
  
  removeBook(){
    this.removeEmiter.emit();
  }
}
