import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { LearningPaths } from '../learning-paths/learning-paths';
import { Programs } from '../../core/services/programs';
import { RouterLink } from '@angular/router';
import { ProgramDetails } from '../program-details/program-details';
import {
  Breadcrumb,
  BreadcrumbItem,
} from '../../shared/components/breadcrumb/breadcrumb/breadcrumb';

@Component({
  selector: 'app-programs-details',
  imports: [NgClass, LearningPaths, RouterLink, Breadcrumb],
  templateUrl: './programs-details.html',
  styleUrl: './programs-details.css',
})
export class ProgramsDetails {
  private programService = inject(Programs);

  programs = this.programService.getAll();
  activeFilter = signal('all');
  tabs = [
    { title: 'كل البرامج', value: 'all', icon: 'pi pi-th-large' },
    { title: 'المستكشف الصغير', value: 'little', ageRange: '5-8', icon: 'pi pi-user' },
    { title: 'المبرمج المبتدئ', value: 'beginner', ageRange: '8-10', icon: 'pi pi-star' },
    { title: 'المبرمج المبدع', value: 'creative', ageRange: '10-13', icon: 'pi pi-trophy' },
    { title: 'المبرمج المحترف', value: 'advanced', ageRange: '13-16', icon: 'pi pi-sparkles' },
  ];

  filteredPrograms = computed(() => {
    const filter = this.activeFilter();
    return filter === 'all' ? this.programs : this.programs.filter((p) => p.value === filter);
  });

  selectProgram(value: string) {
    this.activeFilter.set(value);
  }
  breadcrumbItems: BreadcrumbItem[] = [
    {
      label: 'البرامج التعليمية',
      route: '/programs-details',
    },
  ];
}
