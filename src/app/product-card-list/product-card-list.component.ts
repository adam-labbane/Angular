import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../Models/product.model';
import { SortByDatePipe } from '../pipes/product.pipes';
import { ProductsService } from '../services/product.service';
import { TrieService } from '../services/trie.service';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SearchBarService } from '../services/search-bar.service';
import { style } from '@angular/animations';
import { SearchFilterPipe } from '../pipes/search.pipe';

@Component({
    selector: 'app-product-card-list',
    standalone: true,
    templateUrl: './product-card-list.component.html',
    styleUrl: './product-card-list.component.css',
    imports: [CommonModule, SearchBarComponent, ProductCardComponent, SortByDatePipe, FormsModule, DatePipe, SearchFilterPipe]
})
export class ProductCardListComponent implements OnInit{

  products!: Product[];

  sortOption = 'Date';
  constructor(private productsService: ProductsService, public trieServices: TrieService, public searchBarService: SearchBarService) {}

  ngOnInit(): void {
    this.products = this.productsService.products
    
    
  }
  

  ontrieDate(){
    console.log(this.sortOption)
    console.log(this.trieServices.trievaleur)
    console.log(this.trieServices.trievaleurDate)
    console.log(this.trieServices.trievaleurName)
    this.sortOption = 'Date'
    this.trieServices.trieonDate()


  }
  ontrieName(){
    this.sortOption = 'Name'
    this.trieServices.trieonName()

  }

}
