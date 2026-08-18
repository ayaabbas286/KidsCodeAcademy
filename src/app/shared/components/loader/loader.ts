import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

import { gsap } from 'gsap';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [Logo],
  templateUrl: './loader.html',
  styleUrl: './loader.css',
})
export class Loader implements AfterViewInit {
  @Output() loadingFinished = new EventEmitter<void>();

  @ViewChild('loader')
  loader!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.startAnimation();
  }

  private startAnimation(): void {
    const element = this.loader.nativeElement;

    const context = gsap.context(() => {
      const timeline = gsap.timeline();

      // =========================
      // 1. Logo
      // =========================

      timeline.from('.loader-logo', {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // =========================
      // 2. Letters
      // =========================

      timeline.from(
        '.loader-letter',
        {
          opacity: 0,
          y: 30,
          stagger: 0.08,
          duration: 0.5,
          ease: 'back.out(1.5)',
        },
        '-=0.3',
      );

      // =========================
      // 3. Progress Bar
      // =========================

      timeline.to('.loader-progress-bar', {
        width: '100%',
        duration: 1.8,
        ease: 'power2.inOut',
      });

      // =========================
      // 4. Loading Text
      // =========================

      timeline.from(
        '.loader-text',
        {
          opacity: 0,
          y: 15,
          duration: 0.5,
        },
        '-=0.5',
      );

      // =========================
      // 5. Exit Loader
      // =========================

      timeline.to(element, {
        opacity: 0,
        scale: 1.05,
        duration: 0.8,
        ease: 'power2.inOut',

        onComplete: () => {
          this.loadingFinished.emit();
        },
      });
    }, element);
  }
}
