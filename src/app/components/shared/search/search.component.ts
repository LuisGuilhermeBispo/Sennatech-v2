import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  resultsVisible = false;

  search() {
    // Lógica de pesquisa aqui
    this.resultsVisible = true;
    console.log("TESTE ->" + this.resultsVisible)
  }
}
