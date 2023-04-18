import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentIndex = 0;
  itemsCardService = [
    { imageService: '../../../assets/images/iconExemple.png', alt: '...', titleService: 'Nomenclatura do Serviço', description: 'Breve descritivo sobre o serviço ou exemplos de aplicações.' },
    { imageService: '../../../assets/images/iconExemple.png', alt: '...', titleService: 'Nomenclatura do Serviço', description: 'Breve descritivo sobre o serviço ou exemplos de aplicações.' },
    { imageService: '../../../assets/images/iconExemple.png', alt: '...', titleService: 'Nomenclatura do Serviço', description: 'Breve descritivo sobre o serviço ou exemplos de aplicações.' },
    { imageService: '../../../assets/images/iconExemple.png', alt: '...', titleService: 'Nomenclatura do Serviço', description: 'Breve descritivo sobre o serviço ou exemplos de aplicações.' },
  ];
  itemsCaseSucess = [
    { imageCase: '../../../assets/images/nubankCase.png', alt: '...', titleCase: 'Case de Sucesso com Nubank', imagePartner1: '../../../assets/images/nu_Hover.png', imagePartner2: '../../../assets/images/solvo_white.png', partnerCase1: 'Nubank', partnerCase2: 'Solvo', case: '/cases/case'  },
    { imageCase: '../../../assets/images/vivoCase.png', alt: '...', titleCase: 'Case de Sucesso com Vivo Brasil', imagePartner1: '../../../assets/images/vivo_Hover.png', imagePartner2: '../../../assets/images/wib_white.png', partnerCase1: 'Vivo Brasil', partnerCase2: 'Wib', case: '/cases/case'  },
    { imageCase: '../../../assets/images/ifoodCase.png', alt: '...', titleCase: 'Case de Sucesso com Ifood', imagePartner1: '../../../assets/images/ifood_Hover.png', imagePartner2: '../../../assets/images/wib_white.png', partnerCase1: 'Ifood', partnerCase2: 'Wib', case: '/cases/case'  },
    { imageCase: '../../../assets/images/aleloCase.png', alt: '...', titleCase: 'Case de Sucesso com Alelo', imagePartner1: '../../../assets/images/alelo_Hover.png', imagePartner2: '../../../assets/images/solvo_white.png', partnerCase1: 'Alelo', partnerCase2: 'Solvo', case: '/cases/case'  },
  ];
  current = 0;
}
