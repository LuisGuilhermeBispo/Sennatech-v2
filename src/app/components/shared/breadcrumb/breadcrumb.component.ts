import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../service/breadcrumb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumb: {text: string, route: string}[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.getBreadcrumb().subscribe(breadcrumb => {
      this.breadcrumb = breadcrumb;
    });
  }
}
