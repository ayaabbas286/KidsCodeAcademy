import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  Breadcrumb,
  BreadcrumbItem,
} from '../../shared/components/breadcrumb/breadcrumb/breadcrumb';
import { LearningPathsService } from '../../core/services/learning-paths';

@Component({
  selector: 'app-path-details',
  imports: [NgClass, RouterLink, Breadcrumb],
  templateUrl: './path-details.html',
  styleUrl: './path-details.css',
})
export class PathDetails {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private learningPathsService = inject(LearningPathsService);

  path = this.learningPathsService.getByValue(this.route.snapshot.paramMap.get('slug') ?? '');
  breadcrumbItems: BreadcrumbItem[] = [
    {
      label: 'المسارات التعليمية',
      route: '/paths',
    },
    {
      label: this.path?.title ?? 'تفاصيل المسار',
    },
  ];

  constructor() {
    if (!this.path) {
      this.router.navigate(['/paths']);
    }
  }
}
