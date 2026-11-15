import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Programs } from '../../core/services/programs';
import { NgClass } from '@angular/common';
import {
  Breadcrumb,
  BreadcrumbItem,
} from '../../shared/components/breadcrumb/breadcrumb/breadcrumb';

@Component({
  selector: 'app-program-details',
  imports: [NgClass, RouterLink, Breadcrumb],
  templateUrl: './program-details.html',
  styleUrl: './program-details.css',
})
export class ProgramDetails {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private programsService = inject(Programs);

  program = this.programsService.getByValue(this.route.snapshot.paramMap.get('slug') ?? '');

  breadcrumbItems: BreadcrumbItem[] = [
    {
      label: 'البرامج التعليمية',
      route: '/programs-details',
    },
    {
      label: this.program?.title ?? 'تفاصيل البرنامج',
    },
  ];

  constructor() {
    if (!this.program) {
      this.router.navigate(['/programs-details']);
    }
  }
}
