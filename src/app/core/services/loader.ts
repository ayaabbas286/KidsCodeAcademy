import { inject, Service, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Service()
export class LoaderService {
  isLoading = signal(false);
  EndSplash = signal(false);
  private router = inject(Router);
  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((e) => {
      if (e instanceof NavigationStart) this.isLoading.set(true);
      if (
        e instanceof NavigationEnd ||
        e instanceof NavigationCancel ||
        e instanceof NavigationError
      )
        this.isLoading.set(false);
    });
  }
  EndSplashLoader(): void {
    this.EndSplash.set(true);
  }
}
