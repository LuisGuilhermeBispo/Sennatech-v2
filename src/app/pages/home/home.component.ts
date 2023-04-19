import { Component } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activeSlides: SlidesOutputData = new SlidesOutputData;

  constructor() {}

  getData(data: SlidesOutputData) {
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
        0: {
            items: 4,
        },
    }, 
    nav: false,
};

  currentIndex = 0;
  itemsCardService = [
    { imageService: '../../../assets/images/iconExemple.png', alt: '...', titleService: 'Nomenclatura do Serviço', description: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', id: '1' },
    { imageService: '../../../assets/images/iconExemple.png', alt: '...', titleService: 'Nomenclatura do Serviço', description: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', id: '2' },
    { imageService: '../../../assets/images/iconExemple.png', alt: '...', titleService: 'Nomenclatura do Serviço', description: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', id: '3' },
    { imageService: '../../../assets/images/iconExemple.png', alt: '...', titleService: 'Nomenclatura do Serviço', description: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', id: '4' },
    { imageService: '../../../assets/images/iconExemple.png', alt: '...', titleService: 'Nomenclatura do Serviço', description: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', id: '5' },
    { imageService: '../../../assets/images/iconExemple.png', alt: '...', titleService: 'Nomenclatura do Serviço', description: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', id: '6' },
    { imageService: '../../../assets/images/iconExemple.png', alt: '...', titleService: 'Nomenclatura do Serviço', description: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', id: '7' },
    { imageService: '../../../assets/images/iconExemple.png', alt: '...', titleService: 'Nomenclatura do Serviço', description: 'Breve descritivo sobre o serviço ou exemplos de aplicações.', id: '8' },

  ];
  itemsCaseSucess = [
    { imageCase: '../../../assets/images/nubankCase.png', alt: '...', titleCase: 'Case de Sucesso com Nubank', imagePartner1: '../../../assets/images/nu_Hover.png', imagePartner2: '../../../assets/images/solvo_white.png', partnerCase1: 'Nubank', partnerCase2: 'Solvo', case: '/cases/case'  },
    { imageCase: '../../../assets/images/vivoCase.png', alt: '...', titleCase: 'Case de Sucesso com Vivo Brasil', imagePartner1: '../../../assets/images/vivo_Hover.png', imagePartner2: '../../../assets/images/wib_white.png', partnerCase1: 'Vivo Brasil', partnerCase2: 'Wib', case: '/cases/case'  },
    { imageCase: '../../../assets/images/ifoodCase.png', alt: '...', titleCase: 'Case de Sucesso com Ifood', imagePartner1: '../../../assets/images/ifood_Hover.png', imagePartner2: '../../../assets/images/wib_white.png', partnerCase1: 'Ifood', partnerCase2: 'Wib', case: '/cases/case'  },
    { imageCase: '../../../assets/images/aleloCase.png', alt: '...', titleCase: 'Case de Sucesso com Alelo', imagePartner1: '../../../assets/images/alelo_Hover.png', imagePartner2: '../../../assets/images/solvo_white.png', partnerCase1: 'Alelo', partnerCase2: 'Solvo', case: '/cases/case'  },
  ];
  current = 0;
}
