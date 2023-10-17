import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  search: string | undefined;

  updateSearchValue(value: string) {
    this.search = value;
  }
}
