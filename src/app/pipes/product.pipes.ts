import {Pipe, PipeTransform } from '@angular/core'
import { Product } from '../Models/product.model'

@Pipe({ name: 'sortByDate', standalone:true })
export class SortByDatePipe implements PipeTransform {
    transform(products: Product[], order?: any, option?:any) {
        let desc = !(order && order == 'asc')
        return products.sort((a,b) => { 
            if (option == 'Date'){
                console.log("trie par date effectuer : ")
                if (desc) return b.dateadd.getTime() - a.dateadd.getTime()
                else return a.dateadd.getTime() - b.dateadd.getTime() 
            }
            else {
                console.log("trie par Nom effectuer : ")
                if (desc) return b.title.toUpperCase().localeCompare(a.title.toUpperCase());
                else return a.title.toUpperCase().localeCompare(b.title.toUpperCase());
            }
        } );
    }
}