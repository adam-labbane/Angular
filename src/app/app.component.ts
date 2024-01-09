import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from './Models/product.model';
import { SortByDatePipe } from './pipes/product.pipes';
import { ProductsService,  } from './services/product.service';
import { TrieService } from './services/trie.service';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBarService } from './services/search-bar.service';
import { style } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductCardComponent, SortByDatePipe, FormsModule, SearchBarComponent],
  template: `
    <h1>Welcome to {{this.title}}!</h1>
    
    <div>
      <b>Trie par date : </b>
      <button mat-button (click)="ontrieDate()">{{this.trieServices.trievaleurDate}}</button>
    </div>
    <div>
      <b>Trie par nom  : </b>
      <button mat-button (click)="ontrieName()">{{this.trieServices.trievaleurName}}</button>
    </div>
    <app-search-bar></app-search-bar>
    <div class="card-container">
      <app-product-card *ngFor="let product of (products | sortByDate:this.trieServices.trievaleur:sortOption)" [myProduct]="product"></app-product-card>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  products!: Product[];
  title = 'My shop';
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
