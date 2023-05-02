import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public sobre: string = "/sobre"
  public servicos: string = "/servicos"
  public cases: string = "/cases"
  public parceiros: string = "/parceiros"
  public carreira: string = "/carreira"
  public contato: string = "/contato"

  constructor(public router: Router) {

  }

  pagesList = [
    { link: this.sobre, text: 'Sobre' },
    { link: this.servicos, text: 'Serviços' },
    { link: this.cases, text: 'Cases' },
    { link: this.parceiros, text: 'Parceiros' },
    { link: this.carreira, text: 'Carreira' },
    { link: this.contato, text: 'Contato' },
  ]

  ngOnInit(): void { }

  getRoute() {
    if (this.router.url === '/home') {
      return "menu__home"
    } else {
      return "menu__others"
    }
  }
}
