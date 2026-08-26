import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import Lottie, { AnimationItem } from 'lottie-web';
import { LoaderService } from '../../core/services/loader';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound implements AfterViewInit, OnDestroy, OnInit {
  private loaderService = inject(LoaderService);
  ngOnInit(): void {
    this.loaderService.EndSplashLoader();
  }

  @ViewChild('lottieContainer') lottieContainer!: ElementRef<HTMLElement>;
  private animation!: AnimationItem;

  ngAfterViewInit(): void {
    this.animation = Lottie.loadAnimation({
      container: this.lottieContainer.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/lottie/error404.json',
    });

    gsap.to(this.lottieContainer.nativeElement, {
      y: -15,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    // 3. دخول باقي عناصر الصفحة بشكل تدريجي
    gsap.from('.not-found-text', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.3,
      ease: 'power2.out',
    });
  }

  ngOnDestroy(): void {
    this.animation?.destroy();
  }
}
