import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Cases']);
  }
}
