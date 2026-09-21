import { CommonModule, NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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
  learningPaths: LearningPath[] = [
    {
      id: 1,
      title: 'تطوير الويب',
      description: 'تعلم HTML و CSS و JavaScript وابني مواقع ويب احترافية.',
      icon: 'assets/images/imagePaths/landing-page.png',
      route: '/paths/web-development',
      classStyle: 'web',
    },
    {
      id: 2,
      title: 'الذكاء الاصطناعي',
      description: 'اكتشف عالم الذكاء الاصطناعي وتعلم Machine Learning.',
      icon: 'assets/images/imagePaths/artificial-intelligence.png',
      route: '/paths/artificial-intelligence',
      classStyle: 'ai',
    },
    {
      id: 3,
      title: 'تصميم الجرافيك',
      description: 'تعلم أساسيات التصميم الجرافيكي باستخدام Photoshop و Illustrator.',
      icon: 'assets/images/imagePaths/brush.png',
      route: '/paths/graphic-design',
      classStyle: 'graphic',
    },

    {
      id: 4,
      title: 'تطوير تطبيقات الموبايل',
      description: 'بناء تطبيقات الموبايل باستخدام App Inventor و Flutter.',
      icon: 'assets/images/imagePaths/code.png',
      route: '/paths/mobile-development',
      classStyle: 'mobile',
    },
    {
      id: 5,
      title: 'الروبوتات وإنترنت الأشياء',
      description: 'تعلم Arduino والروبوتات وأنظمة إنترنت الأشياء.',
      icon: 'assets/images/imagePaths/robot.png',
      route: '/paths/robotics-iot',
      classStyle: 'robot',
    },
    {
      id: 6,
      title: 'تطوير الألعاب',
      description: 'اصنع ألعابك الخاصة وتعلم Game Design و Unity.',
      icon: 'assets/images/imagePaths/game-console.png',
      route: '/paths/game-development',
      classStyle: 'games',
    },
  ];
}
