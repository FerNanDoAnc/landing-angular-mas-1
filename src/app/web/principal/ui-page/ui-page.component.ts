import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'app-ui-page',
  templateUrl: './ui-page.component.html',
  styleUrl: './ui-page.component.scss'
})
export class UiPageComponent implements OnInit{
  swiperElement: SwiperContainer | null = null;

  ngOnInit() {
    this.configMySwiper();
  }

  configMySwiper(){
    const swiperElementConstructor = document.querySelector('swiper-container');
    const swiperOptions:SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    };
    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement = swiperElementConstructor as SwiperContainer;
    this.swiperElement.swiper.init();
    this.swiperElement.swiper.autoplay.start();
    this.swiperElement.swiper.navigation.update();
    // navigation buttons
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');
    nextButton?.addEventListener('click', () => {
      this.swiperElement!.swiper.slideNext();
    });
    prevButton?.addEventListener('click', () => {
      this.swiperElement!.swiper.slidePrev();
    });
  }

}
