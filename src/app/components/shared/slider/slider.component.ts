import { Component, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { SliderInterface } from 'src/app/model/slider.model';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent {
    activeSlides: SlidesOutputData = new SlidesOutputData;

      @Input() items: SliderInterface[] = [];
      constructor() {}

      getData(data: SlidesOutputData) {
        this.activeSlides = data;
        console.log(this.activeSlides);
      }

    carouselOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
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
        nav: false,
        navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    };

}