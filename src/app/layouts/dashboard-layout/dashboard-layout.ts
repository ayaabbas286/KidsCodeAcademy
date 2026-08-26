import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteLoader } from '../../shared/components/route-loader/route-loader';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, RouteLoader],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {}
