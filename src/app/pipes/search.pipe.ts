import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Models/product.model';
import { SearchBarService } from '../services/search-bar.service';

@Pipe({name: 'searchFilter', standalone:true, pure: false })
export class SearchFilterPipe implements PipeTransform {

  constructor(private searchBarService: SearchBarService) {}

  transform(products: Product[]): Product[] {
    const search = this.searchBarService.getSearch().toLowerCase();
    return products.filter(product => product.title.toLowerCase().includes(search));
  }
}