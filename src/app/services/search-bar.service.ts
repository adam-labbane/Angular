import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  search: string = "";

  getSearch() {
    return this.search
  }

  setSearch(search: string) {
    this.search = search
  }
}
