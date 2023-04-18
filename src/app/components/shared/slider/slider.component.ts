import { Component, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent {
    activeSlides: SlidesOutputData = new SlidesOutputData;

      @Input() items: any[] = [];
      constructor() {}

      getData(data: SlidesOutputData) {
        this.activeSlides = data;
        console.log(this.activeSlides);
      }

    carouselOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: true,
        navSpeed: 600,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            760: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        }, 
        nav: true,
        navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    };

}