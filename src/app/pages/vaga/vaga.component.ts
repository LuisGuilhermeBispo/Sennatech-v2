import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.scss']
})
export class VagaComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Carreira', 'Vaga']);
  }
}
