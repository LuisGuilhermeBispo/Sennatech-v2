import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-carreira',
  templateUrl: './carreira.component.html',
  styleUrls: ['./carreira.component.scss'],
  providers: [HttpClient]
})
export class CarreiraComponent implements OnInit {
  vagas: any[] = [];
  constructor(private breadcrumbService: BreadcrumbService, private http: HttpClient) { }

  currentPage: number = 1;

  pageChanged(page: number) {
    this.currentPage = page;
  }

  async getJson(): Promise<void> {
    const data = await firstValueFrom(this.http.get<any[]>('../../../assets/vagas.json'));
    this.vagas = data;
  }

  getPaginatedVagas() {
    const startIndex = (this.currentPage - 1) * 8;
    const endIndex = startIndex + 8;

    if(this.vagas.length === 0) {
      this.getJson();
    }
    
    return this.vagas.slice(startIndex, endIndex);
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Carreira']);
  }
}

