import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product.model';
import { NgStyle, CurrencyPipe, DatePipe, NgFor, NgIf   } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-pannier',
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule, MatIconModule, NgIf],
  templateUrl: './pannier.component.html',
  styleUrl: './pannier.component.css'
})
export class PannierComponent implements OnInit{
  products!: Product[];
  total!: number;
  isCartEmpty: boolean = true;

  constructor() {
    this.loadCart();
  }

  ngOnInit(): void {
    this.calculateTotal();
  }

  loadCart() {
    let panier = localStorage.getItem('panier');
    if (panier) {
      this.products = JSON.parse(panier);
      this.isCartEmpty = this.products.length === 0;
    } else {
      this.isCartEmpty = true;
      this.products = [];
    }
  }

  calculateTotal() {
    this.total = this.products.reduce((acc, product) => acc + product.price, 0);
  }

  removeProduct(){
    console.log("remove")
  }

  resetPanier() {
    this.isCartEmpty = true;

    localStorage.removeItem('panier');
  }


  
}
