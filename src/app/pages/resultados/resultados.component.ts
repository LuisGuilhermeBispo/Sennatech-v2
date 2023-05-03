import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { ActivatedRoute } from '@angular/router';
import menuStructure from 'src/app/components/menu/menuStructure';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {
  query: string | null = '';
  result: any[] = [];
  initialList: any[] = [];
  forFilter: any[] = [];
  resultNumber: number = 0;

  constructor(private breadcrumbService: BreadcrumbService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Resultados']);

    this.query = this.route.snapshot.paramMap.get('query');

    this.result = menuStructure.filter(item => {
      return item.terms?.some(term => term.indexOf(this.query!) >= 0)
    });

    this.initialList = this.result;
    this.forFilter = this.result;
    this.resultNumber = this.result.length;
  }

  filtrarDados() {
    const itensSelecionados = this.forFilter.filter(item => item.selected);
    
    this.result = itensSelecionados;

    if (itensSelecionados.length === 0) this.result = this.initialList;
  }
}
