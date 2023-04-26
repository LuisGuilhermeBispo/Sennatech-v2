import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
  providers: [HttpClient]
})
export class CasesComponent implements OnInit {
  currentPage: number = 1;
  casesList: any[] = [];

  pageChanged(page: number) {
    this.currentPage = page;
  }
  
  getPaginatedCases() {
    const startIndex = (this.currentPage - 1) * 8;
    const endIndex = startIndex + 8;
    return this.casesList.slice(startIndex, endIndex);
  }

  constructor(private breadcrumbService: BreadcrumbService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('../../../assets/cases.json').subscribe(data => {
      this.casesList = data;
    });
    
    this.breadcrumbService.setBreadcrumb(['Home', 'Cases']);
  }
}
