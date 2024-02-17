import { Component, OnInit } from '@angular/core';
import { BookApiService } from '../../../services/book-api.service';
import { BookResponseDto } from '../../../models/book/book-response-dto';
import { HttpParams } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-book-items',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './book-items.component.html',
  styles: ``
})
export class BookItemsComponent implements OnInit {

  public books: BookResponseDto[] = []
  public displayedColumns: string[] = ['name', 'price', 'author', 'genre', 'publicationYear', 'isbn', 'language', 'rating'];

  constructor(private _bookApiService: BookApiService) { }

  ngOnInit(): void {
    this._bookApiService.getAll(new HttpParams()).subscribe(books => {
      this.books = books
    });
  }

}
