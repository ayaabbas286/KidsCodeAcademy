import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Loader } from './shared/components/loader/loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('KidsCodeAcademy');
  isLoading = true;

  finishLoading(): void {
    this.isLoading = false;
  }
}
