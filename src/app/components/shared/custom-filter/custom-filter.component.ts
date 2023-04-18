import { Component } from '@angular/core';


@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.scss']
})
export class CustomFilterComponent {
  ordenarPor(ordem: string) {
    if (ordem === 'recentes') {
      // Lógica para ordenar por mais recentes
    } else if (ordem === 'relevantes') {
      // Lógica para ordenar por mais relevantes
    }
  }
}
