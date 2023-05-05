import { Component } from '@angular/core';


@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.scss']
})
export class CustomFilterComponent {
  recentesAtivo = true;
  relevantesAtivo = false;

  toggleAtivo(link: string) {
    if (link === 'recentes') {
      this.recentesAtivo = true;
      this.relevantesAtivo = false;
    } else if (link === 'relevantes') {
      this.recentesAtivo = false;
      this.relevantesAtivo = true;
    }
  }
}
