import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';


export const routes: Routes = [
    {path:'', component:ProductCardListComponent},
    {path:'Detail/:id', component:ProductDetailComponent}
];
