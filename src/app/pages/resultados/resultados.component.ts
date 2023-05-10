import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
  providers: [HttpClient]
})

export class ResultadosComponent implements OnInit {
  query: string | null = '';
  result: any[] = [];
  initialList: any[] = [];
  forFilter: any[] = [];
  resultNumber: number = 0;

  constructor(private breadcrumbService: BreadcrumbService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const cases$ = this.http.get<any[]>('../../../assets/cases.json');
    const vagas$ = this.http.get<any[]>('../../../assets/vagas.json');

    forkJoin({ cases: cases$, vagas: vagas$ })
      .pipe(
        map(result => {
          this.query = this.route.snapshot.paramMap.get('query');

          const cases = result.cases;
          const vagas = result.vagas;

          // Filtra os objetos que contêm a palavra pesquisada
          const filteredCases = cases.filter(c => Object.values(c).some(val => String(val).toLowerCase().includes((this.query ?? '').toLowerCase())));
          const filteredVagas = vagas.filter(v => Object.values(v).some(val => String(val).toLowerCase().includes((this.query ?? '').toLowerCase())));

          // Combina os objetos filtrados em uma única lista
          const filteredList = [...filteredCases, ...filteredVagas];

          this.initialList = filteredList;
          this.result = filteredList;
          this.forFilter = filteredList;
          this.resultNumber = filteredList.length;
        })
      )
      .subscribe();

    this.breadcrumbService.setBreadcrumb([
      { text: 'Home', route: '' },
      { text: 'Resultados', route: '/resultados' },
    ]);
  }

  filtrarDados() {
    const itensSelecionados = this.forFilter.filter(item => item.selected);

    this.result = itensSelecionados;

    if (itensSelecionados.length === 0) this.result = this.initialList;
  }
}
