import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {
    this.filtrarDados();
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Resultados']);
  }

  filtro1 = false;
  filtro2 = false;
  tituloFiltro = "Filtro de exemplo";
  dados = [/* seus dados aqui */];
  dadosFiltrados = [];


  filtrarDados() {
    this.dadosFiltrados = this.dados.filter(dado => {
      // if (this.filtro1 && !dado.atendeFiltro1) {
      //   return false;
      // }
      // if (this.filtro2 && !dado.atendeFiltro2) {
      //   return false;
      // }
      return true;
    });
  }
}
