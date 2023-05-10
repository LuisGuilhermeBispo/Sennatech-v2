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

    if (backGroundButton) {
      backGroundButton.classList.toggle('searchButton');

      const isMobile = window.screen.width < 700;

      if (isMobile) {
        const inputGroup: HTMLElement | null = document.getElementById('inputGroup');

        if (inputGroup != null) {
          let isLeft45 = inputGroup.classList.contains('input-group-append-45');

          if (isLeft45) {
            inputGroup.classList.remove('input-group-append-45');
            inputGroup.classList.add('input-group-append-65');
          } else {
            inputGroup.classList.remove('input-group-append-65');
            inputGroup.classList.add('input-group-append-45');
          }
        }
      }
    }
  }

  search() {
    this.router.navigate(['resultados', this.searchTerm]);
  }

  onSearchEnter(event: any) {
    const minChars = 3;

    if (this.searchTerm.trim().length < minChars) {
      event.preventDefault();
      alert(`Digite pelo menos ${minChars} caracteres para buscar.`);
    } else {
      this.search();
    }
  }
}
