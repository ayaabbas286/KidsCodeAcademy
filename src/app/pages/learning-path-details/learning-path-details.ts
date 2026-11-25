import { Component, computed, inject, signal } from '@angular/core';
import { LearningPathsService } from '../../core/services/learning-paths';
import {
  Breadcrumb,
  BreadcrumbItem,
} from '../../shared/components/breadcrumb/breadcrumb/breadcrumb';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-learning-path-details',
  imports: [NgClass, Breadcrumb, RouterLink],
  templateUrl: './learning-path-details.html',
  styleUrl: './learning-path-details.css',
})
export class LearningPathDetails {
  private learningPathsService = inject(LearningPathsService);

  paths = this.learningPathsService.getAll();

  activeFilter = signal('all');

  tabs = [
    { title: 'كل المسارات', value: 'all', icon: 'pi pi-th-large' },
    { title: 'تطوير الويب', value: 'web-development', icon: 'pi pi-code' },
    { title: 'الذكاء الاصطناعي', value: 'artificial-intelligence', icon: 'pi pi-bolt' },
    { title: 'تصميم الجرافيك', value: 'graphic-design', icon: 'pi pi-palette' },
    { title: 'تطبيقات الموبايل', value: 'mobile-development', icon: 'pi pi-mobile' },
    { title: 'الروبوتات', value: 'robotics-iot', icon: 'pi pi-cog' },
    { title: 'تطوير الألعاب', value: 'game-development', icon: 'pi pi-gamepad' },
  ];

  filteredPaths = computed(() => {
    const filter = this.activeFilter();

    return filter === 'all' ? this.paths : this.paths.filter((path) => path.value === filter);
  });

  selectPath(value: string) {
    this.activeFilter.set(value);
  }

  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'المسارات التعليمية', route: '/learningPathsDetails' },
  ];
}
