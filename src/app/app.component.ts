import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,  FormsModule, HeaderComponent, ProductCardListComponent, FooterComponent],
  template: `
    <app-header></app-header>
    
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  
  `,
  styles: []
})
export class AppComponent implements OnInit {



  ngOnInit(): void {
    
  }
  


  

}
