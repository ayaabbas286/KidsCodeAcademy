import { Component, inject } from '@angular/core';
import { LoaderService } from '../../../core/services/loader';

@Component({
  selector: 'app-route-loader',
  imports: [],
  templateUrl: './route-loader.html',
  styleUrl: './route-loader.css',
})
export class RouteLoader {
  loader = inject(LoaderService);
}
