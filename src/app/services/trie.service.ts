import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrieService {
    trievaleur: string = 'asc';
  
    trieon() {
      this.trievaleur = this.trievaleur === 'asc' ? 'desc' : 'asc';
    }
}
