import {Pipe, PipeTransform } from '@angular/core'
import { Product } from '../Models/product.model'

@Pipe({ name: 'sortByDate', standalone:true })
export class SortByDatePipe implements PipeTransform {
    transform(products: Product[], order?: any) {
        let desc = !(order && order == 'asc')
        return products.sort((a,b) => { 
            if (desc) return b.dateadd.getTime() - a.dateadd.getTime()
            else return a.dateadd.getTime() - b.dateadd.getTime()        
        } );
    }
}