import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';

@Component({
  selector: 'app-carreira',
  templateUrl: './carreira.component.html',
  styleUrls: ['./carreira.component.scss']
})
export class CarreiraComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) { }

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
    this.breadcrumbService.setBreadcrumb(['Home', 'Carreira']);
  }
  vagas = [
    { location: 'Brasil - Remoto1', vagaNome: 'Front End CSS Developer', link: './vaga' },
    { location: 'Brasil - Remoto2', vagaNome: 'Front End CSS Developer', link: './vaga' },
    { location: 'Brasil - Remoto3', vagaNome: 'Front End CSS Developer', link: './vaga' },
    { location: 'Brasil - Remoto4', vagaNome: 'Front End CSS Developer', link: './vaga' },
    { location: 'Brasil - Remoto5', vagaNome: 'Front End CSS Developer', link: './vaga' },
    { location: 'Brasil - Remoto6', vagaNome: 'Front End CSS Developer', link: './vaga' },
    { location: 'Brasil - Remoto7', vagaNome: 'Front End CSS Developer', link: './vaga' },
    { location: 'Brasil - Remoto8', vagaNome: 'Front End CSS Developer', link: './vaga' },
    { location: 'Brasil - Remoto9', vagaNome: 'Front End CSS Developer', link: './vaga' },
    { location: 'Brasil - Remoto10', vagaNome: 'Front End CSS Developer', link: './vaga' },
    { location: 'Brasil - Remoto11', vagaNome: 'Front End CSS Developer', link: './vaga' },
    { location: 'Brasil - Remoto12', vagaNome: 'Front End CSS Developer', link: './vaga' }
  ];
}

