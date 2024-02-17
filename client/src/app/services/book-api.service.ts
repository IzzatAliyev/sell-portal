import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BookRequestDto } from '../models/book/book-request-dto';
import { BookResponseDto } from '../models/book/book-response-dto';
import { AppConst } from '../app.const';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  private bookUrl: string = AppConst.booksUrl;

  constructor(private _apiService: ApiService<BookRequestDto, BookResponseDto>) { }

  getAll(httpParams: HttpParams): Observable<BookResponseDto[]> {
    return this._apiService.getAll(this.bookUrl, httpParams);
  }
}
