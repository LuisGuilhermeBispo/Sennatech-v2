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
    this.breadcrumbService.setBreadcrumb([
      { text: 'Home', route: '' },
    ]);
      }
  searchQuery: string = '';

  search() {
    this.router.navigate(['resultados', this.searchQuery]);
  }

  onSearch(event: any) {
    const minChars = 3;

    if (this.searchQuery.trim().length < minChars) {
      event.preventDefault();
      alert(`Digite pelo menos ${minChars} caracteres para buscar.`);
    } else {
      this.search();
    }
  }

}
