import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from './Models/product.model';
import { SortByDatePipe } from './pipes/product.pipes';
import { ProductsService,  } from './services/product.service';
import { TrieService } from './services/trie.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductCardComponent, SortByDatePipe, FormsModule],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <div>
      Chercher : <input placeholder="chercher un produit" type="text" id="search" name="search" [(ngModel)]="search"/>
      La recherche : {{search}}
    </div>
    <div>
      <b>Trie : </b>
      <button mat-button (click)="ontrie()">{{gettrie()}}</button>
    </div>
    <app-product-card *ngFor="let product of (products | sortByDate:this.trieServices.trievaleur)" [myProduct]="product"></app-product-card>
    
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  products!: Product[];
  title = 'My shop';
  search: string = '';

  constructor(private productsService: ProductsService, public trieServices: TrieService) {}

  ngOnInit(): void {
    this.search = ""
    
      this.products = this.productsService.products
  }
  gettrie(){
    return this.trieServices.trievaleur
  }
  ontrie(){
    this.trieServices.trieon()

  }
  

}
