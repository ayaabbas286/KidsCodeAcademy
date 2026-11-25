import { CommonModule, NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { LearningPathsService } from '../../core/services/learning-paths';

export interface LearningPath {
  id: number;
  title: string;
  description: string;
  icon: string;
  classStyle: string;
  route: string;
}
@Component({
  selector: 'app-learning-paths',
  imports: [CommonModule, RouterLink, NgClass],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './learning-paths.html',
  styleUrl: './learning-paths.css',
})
export class LearningPaths implements AfterViewInit {
  @ViewChild('mySwiper') mySwiper!: ElementRef;
  ngAfterViewInit(): void {
    new Swiper(this.mySwiper.nativeElement, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1280: { slidesPerView: 4 },
      },
    });
  }
  private LearningPathsService = inject(LearningPathsService)
  learningPaths = this.LearningPathsService.getAll();
}
