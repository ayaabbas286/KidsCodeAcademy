import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Loader } from './shared/components/loader/loader';
import { LoaderService } from './core/services/loader';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Loader, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('KidsCodeAcademy');

  loaderService = inject(LoaderService);
 
}
