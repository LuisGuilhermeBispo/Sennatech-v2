import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  currentIndex = 0;
  items = [
    { image: '../../../assets/images/banner.png', alt: '...', title: '001', description: 'Teste 1' },
    { image: '../../../assets/images/banner_2.png', alt: '...', title: '002', description: 'Teste 2' },
  ];
  current = 0;

  ngOnInit() {
    this.activate(0);
  }

  prev() {
    const prev = (this.current + this.items.length - 1) % this.items.length;
    this.activate(prev, 'prev');
  }

  next() {
    const next = (this.current + 1) % this.items.length;
    this.activate(next, 'next');
  }

  activate(index: number, direction?: string) {
    const carouselItems = document.querySelectorAll('.carousel-item') as NodeListOf<HTMLElement>;
    carouselItems[this.current].classList.remove('active');
    carouselItems[index].classList.add('active');
    if (direction === 'prev') {
      carouselItems[index].classList.add('prev');
      setTimeout(() => carouselItems[index].classList.remove('prev'), 1000);
    } else if (direction === 'next') {
      carouselItems[index].classList.add('next');
      setTimeout(() => carouselItems[index].classList.remove('next'), 1000);
    }
    this.current = index;
  }

  nextItem() {
    if (this.currentIndex === this.items.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  prevItem() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.items.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  selectItem(index: number) {
    this.currentIndex = index;
  }
}
