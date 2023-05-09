import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
  providers: [HttpClient]
})
export class CaseComponent implements OnInit {
  cases: any[] = [];
  relatedCasesList: any[] = [];
  currentCase: any[] = [];

  constructor(private breadcrumbService: BreadcrumbService, private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  goToCase(id: string): void {
    this.router.navigate(['cases/case', id]);

    this.ngOnInit();
  }

  ngOnInit() {
    this.http.get<any[]>('../../../assets/cases.json').subscribe(data => {
      this.cases = data;

      const id = this.route.snapshot.params['id'];
      const filterCurrentCase = this.cases.filter((element) => element.caseSucesso === id);
      const filterRelatedCases = this.cases.filter((element) => element.caseSucesso !== id);

      this.currentCase = filterCurrentCase;
      this.relatedCasesList = filterRelatedCases;

      this.breadcrumbService.setBreadcrumb([
        { text: 'Home', route: '' },
        { text: 'Cases', route: '/cases' },
        { text: id, route: `/cases/case/${id}` }
      ]);

    });
  }
}
