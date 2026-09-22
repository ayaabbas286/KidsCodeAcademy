import { AfterViewInit, Component, inject, signal } from '@angular/core';
import AOS from 'aos';
import { Loader } from './shared/components/loader/loader';
import { LoaderService } from './core/services/loader';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Loader, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly title = signal('KidsCodeAcademy');
  private router = inject(Router);
  loaderService = inject(LoaderService);

  ngAfterViewInit(): void {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 100,
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      setTimeout(() => AOS.refresh(), 0);
    });
  }
}
