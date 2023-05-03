import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, tap } from 'rxjs';

@Component({
  selector: 'app-carreira',
  templateUrl: './carreira.component.html',
  styleUrls: ['./carreira.component.scss'],
  providers: [HttpClient]
})
export class CarreiraComponent implements OnInit {
  vagas: any[] = [];
  isLoading: boolean = true;

  constructor(private breadcrumbService: BreadcrumbService, private http: HttpClient) { }

  currentPage: number = 1;

  pageChanged(page: number) {
    this.currentPage = page;
  }

  getPaginatedVagas() {
    const startIndex = (this.currentPage - 1) * 8;
    const endIndex = startIndex + 8;

    return this.vagas.slice(startIndex, endIndex);
  }

  ngOnInit() {
    this.http.get<any[]>('../../../assets/vagas.json').pipe(
      tap(data => {
        this.vagas = data;
        this.isLoading = false;
      })
    ).subscribe();

    this.breadcrumbService.setBreadcrumb([
      { text: 'Home', route: '' },
      { text: 'Carreira', route: '/carreira' },
    ]);
  }
}

