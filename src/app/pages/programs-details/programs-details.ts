import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { LearningPaths } from '../learning-paths/learning-paths';
type Theme = 'blue' | 'green' | 'orange' | 'purple';

interface Program {
  title: string;
  value: string;
  icon: string;
  ageRange: string;
  ageLabel: string;
  description: string;
  features: string[];
  duration: string;
  projectsCount: number;
  theme: Theme;
  image: string;
}
@Component({
  selector: 'app-programs-details',
  imports: [NgClass, LearningPaths],
  templateUrl: './programs-details.html',
  styleUrl: './programs-details.css',
})
export class ProgramsDetails {
  activeFilter = signal('all');
  tabs = [
    { title: 'كل البرامج', value: 'all', icon: 'pi pi-th-large' },
    { title: 'المستكشف الصغير', value: 'little', ageRange: '5-8', icon: 'pi pi-user' },
    { title: 'المبرمج المبتدئ', value: 'beginner', ageRange: '8-10', icon: 'pi pi-star' },
    { title: 'المبرمج المبدع', value: 'creative', ageRange: '10-13', icon: 'pi pi-trophy' },
    { title: 'المبرمج المحترف', value: 'advanced', ageRange: '13-16', icon: 'pi pi-sparkles' },
  ];
  programs: Program[] = [
    {
      title: 'المستكشف الصغير',
      value: 'little',
      icon: 'pi-face-smile',
      ageRange: '5-8',
      ageLabel: '5 - 8 سنوات',
      description:
        'برنامج ممتع وبسيط يعرّف طفلك بأساسيات البرمجة من خلال الألعاب والأنشطة التفاعلية',
      features: ['مفاهيم البرمجة الأساسية', 'التفكير المنطقي والإبداعي', 'بناء ألعاب بسيطة'],
      duration: '2 شهر',
      projectsCount: 2,
      theme: 'blue',
      image: 'assets/images/programs/explorer.png',
    },
    {
      title: 'المبرمج المبتدئ',
      value: 'beginner',
      icon: 'pi-user',
      ageRange: '8-10',
      ageLabel: '8 - 10 سنوات',
      description: 'يبدأ الطفل هنا رحلته مع البرمجة عبر مشاريع بسيطة وتجارب ممتعة تناسب عمره',
      features: [
        'أساسيات البرمجة المنظمة',
        'بناء الألعاب والتطبيقات البسيطة',
        'التفكير الإبداعي وحل المشكلات',
      ],
      duration: '2.5 شهر',
      projectsCount: 3,
      theme: 'green',
      image: 'assets/images/programs/beginner.png',
    },
    {
      title: 'المبرمج المبدع',
      value: 'creative',
      icon: 'pi-star',
      ageRange: '10-13',
      ageLabel: '10 - 13 سنة',
      description:
        'برنامج متقدم يساعد طفلك على بناء مشاريع حقيقية وتطوير مهاراته في البرمجة والتفكير المنطقي',
      features: [
        'تطوير الألعاب والتطبيقات التفاعلية',
        'استخدام JavaScript وAPIs',
        'التفكير المنطقي وحل المشكلات',
      ],
      duration: '3 أشهر',
      projectsCount: 4,
      theme: 'orange',
      image: 'assets/images/programs/inventor.png',
    },
    {
      title: 'المبرمج المحترف',
      value: 'advanced',
      icon: 'pi-trophy',
      ageRange: '13-16',
      ageLabel: '13 - 16 سنة',
      description: 'برنامج شامل لإعداد طفلك لسوق العمل المستقبلي من خلال مشاريع وتقنيات حديثة',
      features: [
        'تطوير تطبيقات الويب المتقدمة',
        'استخدام Angular / React',
        'بناء مشاريع حقيقية على GitHub',
      ],
      duration: '4 أشهر',
      projectsCount: 6,
      theme: 'purple',
      image: 'assets/images/programs/expertDev.png',
    },
  ];

  filteredPrograms = computed(() => {
    const filter = this.activeFilter();
    return filter === 'all' ? this.programs : this.programs.filter((p) => p.value === filter);
  });

  selectProgram(value: string) {
    this.activeFilter.set(value);
  }
}
