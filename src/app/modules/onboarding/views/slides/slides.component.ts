import {Component, OnInit, ViewChild} from '@angular/core';
import {SwiperOptions} from 'swiper';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Router} from '@angular/router';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    scrollbar: {draggable: true},
    loop: false
  };

  config2: SwiperOptions = {
    slidesPerView: 1,
    autoplay: {
      delay: 500,
    },
    pagination: {clickable: true}
  };

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  toggleRead(event: any) {
    var target = event.target;
    if(!target.classList.contains("dropdown-container")) {
      target = target.parentElement;
    }
    target.previousElementSibling.classList.toggle("active");
  }

  @ViewChild('swiper') swiper: any;

  async slideNext() {
    if (this.swiper.swiperRef.realIndex + 1 == document.querySelectorAll(".slider-holder").length) {
      localStorage.setItem('walkThroughCompleted', 'true');
      await this.router.navigate(['/dashboard/token']);
    }
    this.swiper.swiperRef.slideNext();
  }

  slidePrev() {
    this.swiper.swiperRef.slidePrev();
  }

}
