import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarService } from '../services/search-bar.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {

  search: string = '';

  constructor(private searchBarService: SearchBarService) {}

  ngOnInit(): void {
    
  }

  onSearchChange(newsearch : string){
    console.log(newsearch)
    return this.searchBarService.setSearch(newsearch)
  }
  
}
