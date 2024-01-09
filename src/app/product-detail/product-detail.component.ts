import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product.model';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgStyle, CurrencyPipe, DatePipe, NgForOf, NgIf   } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatFormFieldModule, NgStyle, DatePipe, CurrencyPipe, NgForOf, NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

    productId: number = 0;
    selectedProduct!: Product;

    constructor(
        private route: ActivatedRoute,
        private productsService: ProductsService
    ) {}

    ngOnInit(): void {

        this.route.params.subscribe(params => {
            this.productId = +params['id'];
            this.selectedProduct = this.productsService.getProductById(this.productId) || new Product(
              1,
              " T-shirt basique en coton",
              " Un t-shirt essentiel en coton doux qui offre confort et polyvalence. Parfait pour les occasions décontractées, ce t-shirt est un incontournable de toute garde-robe. ",
              "assets/images/tshirt1.PNG",
              0,
              0,
              false,
              "like",
              new Date,
              ['S', 'L', 'XL'],
              
            )
            });
        console.log(this.selectedProduct)
    }


    auChangement(event: any) {
      const selectedSize = event.target.value;
    
      if (selectedSize == "S")
      {
        this.selectedProduct.price = 5;
      }
      else if (selectedSize == "M")
      {
        this.selectedProduct.price = 10;
      }
      else if (selectedSize == "L")
      {
        this.selectedProduct.price = 15;
      }
      else if (selectedSize == "XL")
      {
        this.selectedProduct.price = 20;
      }
    
    }
    
    
      onAddLike() {
        if (this.selectedProduct.isLiked == false) {
          this.selectedProduct.likes++
          this.selectedProduct.isLiked = true;
          this.selectedProduct.btnValue = "unlike"
        }
        else if (this.selectedProduct.isLiked == true)
        {
          this.selectedProduct.likes--
          this.selectedProduct.isLiked = false
          this.selectedProduct.btnValue = "like"
        }
    
    
      }

}
