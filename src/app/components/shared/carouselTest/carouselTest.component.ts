import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-carouselTest',
    templateUrl: './carouselTest.component.html',
    styleUrls: ['./carouselTest.component.scss']
})

export class CarouselComponentTest implements OnInit {
    items = [
        {
            imgUrl: '../../../../assets/images/solace.png',
            altText: 'Solace Brand',
            title: 'Projetar, implantar e gerenciar arquitetura orientada a eventos (EDA)',
            text: 'em ambientes de nuvem híbrida, multinuvem e IoT.'
        },
        {
            imgUrl: '../../../../assets/images/solvo.png',
            altText: 'Solvo Brand',
            title: 'Descubram, priorizem, mitiguem e corrijam automaticamente os riscos',
            text: 'de acesso à infraestrutura de nuvem.'
        },
        {
            imgUrl: '../../../../assets/images/wib.png',
            altText: 'Wib Brand',
            title: 'A Wib API oferece visibilidade contínua em todo o ciclo de vida da API',
            text: 'desde o código até o teste e a produção.'
        }
    ];

    carouselOptions = {
        loop: true,
        nav: true,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    };

    constructor() { }

    ngOnInit(): void {
    }
}