import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import menuStructure from './menuStructure';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) {

  }

  pagesList = menuStructure;

  ngOnInit(): void { }

  hideNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    if(navbar) navbar.classList.remove('show');
  }

  getRoute() {
    if (this.router.url === '/home') {
      return "menu__home"
    } else {
      return "menu__others"
    }
  }
}
