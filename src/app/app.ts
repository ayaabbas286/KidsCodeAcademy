import { Component, inject, signal } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
  RouterOutlet,
} from '@angular/router';
import { Home } from './pages/home/home';
import { LoaderService } from './core/services/loader';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Loader } from './shared/components/loader/loader';
import { RouteLoader } from './shared/components/route-loader/route-loader';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Loader, RouterOutlet, RouteLoader, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private sub_loader = inject(LoaderService);
  private router = inject(Router);
  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((e) => {
      if (e instanceof NavigationStart) this.sub_loader.isLoading.set(true);
      if (
        e instanceof NavigationEnd ||
        e instanceof NavigationCancel ||
        e instanceof NavigationError
      )
        this.sub_loader.isLoading.set(false);
    });
  }
  protected readonly title = signal('KidsCodeAcademy');
  isLoading = true;

  finishLoading(): void {
    this.isLoading = false;
  }
}
