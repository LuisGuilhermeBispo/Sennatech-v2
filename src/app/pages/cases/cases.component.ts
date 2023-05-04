import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
  providers: [HttpClient]
})
export class CasesComponent implements OnInit {
  currentPage: number = 1;
  casesList: any[] = [];
  isLoading: boolean = true;

  pageChanged(page: number) {
    this.currentPage = page;
  }

  getPaginatedCases() {
    const startIndex = (this.currentPage - 1) * 8;
    const endIndex = startIndex + 8;
    return this.casesList.slice(startIndex, endIndex);
  }

  orderBy(event: any) {
    const { id } = event.target;
    if (id === 'relevantes') {
      this.casesList.sort((a, b) => {
        if (a.relevancia === b.relevancia) {
          return 0;
        }
        if (a.relevancia < b.relevancia) {
          return -1;
        }
        return 1;
      });
    } else {
      this.casesList.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }
  }

  constructor(private breadcrumbService: BreadcrumbService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('../../../assets/cases.json').pipe(
      tap(data => {
        this.casesList = data;
        this.isLoading = false;

        this.orderBy({target: {id: 'recentes'}});
      })
    ).subscribe();

    this.breadcrumbService.setBreadcrumb(['Home', 'Cases']);
  }
}
