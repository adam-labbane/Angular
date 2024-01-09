import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    new Product(
      "w",
      " Un t-shirt essentiel en coton doux qui offre confort et polyvalence. Parfait pour les occasions décontractées, ce t-shirt est un incontournable de toute garde-robe. ",
      "assets/images/tshirt1.PNG",
      0,
      0,
      false,
      "like",
      new Date,
      ['S', 'L', 'XL'],
      
    ),
    new Product(
    "a",
      "Inspiré par la nature, ce t-shirt présente un design artistique représentant des paysages montagneux. Ajoutez une touche d'aventure à votre style quotidien.",
      "assets/images/tshirt2.PNG",
      0,
      0,
      false,
      "like",
      new Date('2025/2/18'),
      ['M', 'XL', 'S'],
      ),
      new Product(
        "c",
          "Retournez dans le temps avec notre t-shirt vintage à rayures. Avec un design rétro, des couleurs intemporelles et une coupe confortable, ce t-shirt vous donne une allure décontractée et stylée.",
          "assets/images/tshirt3.PNG",
          0,
          0,
          false,
          "like",
          new Date('2025/2/18'),
          ['M', 'XL', 'S'],
          ),
      new Product(
        "b",
        "Exprimez votre côté artistique avec notre t-shirt en édition limitée ",
        "assets/images/tshirt4.PNG",
        0,
        0,
        false,
        "like",
        new Date('2025/2/18'),
        ['M', 'XL', 'S'],
        ),
      new Product(
        "d",
        "Découvrez notre t-shirt ajusté en jersey de coton de haute qualité. Sa coupe ajustée offre une silhouette élégante, tandis que le coton doux garantit un confort exceptionnel tout au long de la journée.",
        "assets/images/tshirt5.PNG",
        0,
        0,
        false,
        "like",
        new Date('2025/2/18'),
        ['M', 'XL', 'S'],
        ),
      

]

}
