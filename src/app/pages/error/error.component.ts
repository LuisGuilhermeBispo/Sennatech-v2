import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService, private router: Router) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home']);
  }
  searchQuery: string = '';

  search() {
    this.router.navigate(['resultados', this.searchQuery]);
  }

}
