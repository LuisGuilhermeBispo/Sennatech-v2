import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Resultados']);
  }
}
