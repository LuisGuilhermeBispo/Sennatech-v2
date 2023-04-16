import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-carouselTest',
    templateUrl: './carouselTest.component.html',
    styleUrls: ['./carouselTest.component.scss']
})

export class CarouselComponentTest implements OnInit {
    @Input() items: { imgUrl: string, altText: string, text: string, title: string }[] = [];

    carouselOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        nav: true,
        dots: true,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            740: {
                items: 3
            }
        },
    }

constructor() {
}

ngOnInit(): void {

}
}