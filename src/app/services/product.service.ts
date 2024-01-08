import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    new Product(
      "brosse à dent #1",
      "brosse a dent naturel",
      "https://images.unsplash.com/photo-1605615971281-498d939477b3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      0,
      0,
      false,
      "like",
      new Date,
      ['S', 'L', 'XL'],
      
    ),
    new Product(
    "brosse à dent #2",
      "brosse a dent naturel dans la fausse",
      "https://images.unsplash.com/photo-1605615923013-f26c14fe7155?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      0,
      0,
      false,
      "like",
      new Date('2025/2/18'),
      ['M', 'XL', 'S'],
      
  )]

}
