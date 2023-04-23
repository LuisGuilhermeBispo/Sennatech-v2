import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  currentPage: number = 1;

  pageChanged(page: number) {
    this.currentPage = page;
  }
  
  getPaginatedCases() {
    const startIndex = (this.currentPage - 1) * 8;
    const endIndex = startIndex + 8;
    return this.caseslist.slice(startIndex, endIndex);
  }

  constructor(private breadcrumbService: BreadcrumbService) {}

  caseslist = [
    {id: '1', img: '../../../assets/images/img_Nubank.png', alt: 'Case Nubank', year: '2023', nomeParceira: 'SOLVO', caseSucesso: 'Nubank', discritivo: 'Descritivo parcialmente detalhado sobre o case. Exibir problema, parceiro e solução implementada.'},
    {id: '2', img: '../../../assets/images/img_Vivo.png', alt: 'Case Vivo', year: '2023', nomeParceira: 'WIB', caseSucesso: 'Vivo', discritivo: 'Descritivo parcialmente detalhado sobre o case. Exibir problema, parceiro e solução implementada.'},
    {id: '3', img: '../../../assets/images/img_Ifood.png', alt: 'Case Ifood', year: '2023', nomeParceira: 'WIB', caseSucesso: 'Ifood', discritivo: 'Descritivo parcialmente detalhado sobre o case. Exibir problema, parceiro e solução implementada.'},
    {id: '4', img: '../../../assets/images/img_Alelo.png', alt: 'Case Alelo', year: '2023', nomeParceira: 'SOLVO', caseSucesso: 'Alelo', discritivo: 'Descritivo parcialmente detalhado sobre o case. Exibir problema, parceiro e solução implementada.'},
  ]

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Cases']);
  }
}
