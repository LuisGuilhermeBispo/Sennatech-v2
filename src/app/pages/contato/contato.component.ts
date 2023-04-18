import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Contato']);
  }
}
