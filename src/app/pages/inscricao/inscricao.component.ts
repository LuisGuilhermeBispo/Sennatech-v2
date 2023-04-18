import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss']
})
export class InscricaoComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {}

  curriculo: File | null = null;

  onCurriculoSelected(event: any) {
    if (event.target.files && event.target.files.length) {
      this.curriculo = event.target.files[0];
    }
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Carreira', 'Vaga', 'Inscrição']);
  }

}
