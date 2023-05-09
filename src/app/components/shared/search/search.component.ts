import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = '';
  inputVisible: boolean = false;

  constructor(private router: Router) { }

  toggleInput() {
    this.inputVisible = !this.inputVisible;
    if (!this.inputVisible) {
      this.searchTerm = '';
    }

    const backGroundButton = document.getElementById('searchButton');
    
    if(backGroundButton){
      backGroundButton.classList.toggle('searchButton')
    }
  }

  search() {
    this.router.navigate(['resultados', this.searchTerm]);
  }
}
