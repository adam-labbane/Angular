import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrieService {
    trievaleurDate: string = 'asc';
    trievaleurName: string = 'asc';
    trievaleur: string = 'asc';
  
    private isFirstPress: boolean = false;

    trieonDate() {
      if (this.isFirstPress) {
        this.trievaleur = this.trievaleur === 'asc' ? 'desc' : 'asc';
        this.trievaleurDate = this.trievaleurDate === 'asc' ? 'desc' : 'asc';
      } else {
        this.isFirstPress = true;
      }
    }
  
    trieonName() {
      if (this.isFirstPress) {
        this.trievaleur = this.trievaleur === 'asc' ? 'desc' : 'asc';
        this.trievaleurName = this.trievaleurName === 'asc' ? 'desc' : 'asc';
      } else {
        this.isFirstPress = true;
      }
    }
}
