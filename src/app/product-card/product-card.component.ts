
import { Component, Input,  } from '@angular/core';
import { CommonModule, CurrencyPipe, UpperCasePipe, DatePipe } from '@angular/common';
import { Product } from '../Models/product.model';
import { NgForOf, NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TrieService } from '../services/trie.service';
import { SearchBarService } from '../services/search-bar.service';
import { NgStyle } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf, NgForOf, MatButtonModule, MatCardModule, MatIconModule, NgStyle, MatSelectModule, MatFormFieldModule, CurrencyPipe, UpperCasePipe, DatePipe, ],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  constructor(private trieService: TrieService, public searchBarService: SearchBarService, private router: Router) {}

auChangement(event: any) {
  const selectedSize = event.target.value;

  if (selectedSize == "S")
  {
    this.myProduct.price = 5;
  }
  else if (selectedSize == "M")
  {
    this.myProduct.price = 10;
  }
  else if (selectedSize == "L")
  {
    this.myProduct.price = 15;
  }
  else if (selectedSize == "XL")
  {
    this.myProduct.price = 20;
  }

}
  @Input() myProduct!: Product;


  onAddLike() {
    if (this.myProduct.isLiked == false) {
      this.myProduct.likes++
      this.myProduct.isLiked = true;
      this.myProduct.btnValue = "unlike"
    }
    else if (this.myProduct.isLiked == true)
    {
      this.myProduct.likes--
      this.myProduct.isLiked = false
      this.myProduct.btnValue = "like"
    }


  }

  toDetail(id : number){
    this.router.navigate(['Detail', id]);
  }

}
