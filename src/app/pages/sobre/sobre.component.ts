import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {}
  activeSlides: SlidesOutputData = new SlidesOutputData;

  get(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        400: {
            items: 1,
        },
    }, 
    nav: false,
};

items = [
  {id: '1', title: 'Qualidade', text: 'As entregas passam por uma série de validações para que, independente da demanda, nossos clientes possam esperar resultados de excelência.'},
  {id: '2', title: 'Parceria', text: 'Procuramos sempre por novas tecnologias e ideias na busca permanente de inovação que resulte em geração de valor para o cliente e organização.'},
  {id: '3', title: 'Conhecimento', text: 'Estimulamos a difusão do conhecimento e implantação das melhores práticas com o objetivo de consolidar  a experiência do time.'},
];

  isMobile: boolean = false;

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Sobre']);
    this.isMobile = window.screen.width < 768;

    const carousel = document.querySelector('.owl-carousel') as HTMLElement;

    if (carousel) {
      carousel.addEventListener('touchmove', (e) => {
        e.preventDefault();
      }, { passive: false });
    }
  }

  isMobileScreen(): boolean {
    return this.isMobile;
  }

}
