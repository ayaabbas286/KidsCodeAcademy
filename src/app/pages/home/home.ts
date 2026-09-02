import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import lottie, { AnimationItem } from 'lottie-web';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WhyUs } from '../why-us/why-us';
import { RouterLink } from '@angular/router';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WhyUs, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit, OnDestroy {
  @ViewChild('HeroSection') HeroSection!: ElementRef<HTMLElement>;

  private animation!: AnimationItem;
  private idleTween!: gsap.core.Tween;

  ngAfterViewInit(): void {
    this.playEntranceAnimation();
    this.initRobot();
  }

  private playEntranceAnimation(): void {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-badge', { opacity: 0, y: 20, duration: 0.6 })
      .from('.hero-line', { opacity: 0, y: 40, stagger: 0.15, duration: 0.8 }, '-=0.3')
      .from('.hero-desc', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
      .from('.hero-actions > *', { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 }, '-=0.3')
      .from(
        '.hero-robot',
        { opacity: 0, scale: 0.8, duration: 0.8, ease: 'back.out(1.4)' },
        '-=0.6',
      )
      .from('.floating-shape', { opacity: 0, scale: 0, stagger: 0.15, duration: 0.6 }, '-=0.6');
  }

  private initRobot(): void {
    this.animation = lottie.loadAnimation({
      container: this.HeroSection.nativeElement,
      loop: true,
      renderer: 'svg',
      autoplay: true,
      path: 'assets/lottie/Web Development.json',
    });

    this.idleTween = gsap.to(this.HeroSection.nativeElement, {
      y: -14,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }

  ngOnDestroy(): void {
    this.animation?.destroy();
    this.idleTween?.kill();
  }
}
