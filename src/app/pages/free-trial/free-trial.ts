import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TrialForm } from '../trial-form/trial-form';
export interface features {
  id: number;
  title: string;
  description: string;
  classStyle: string;
  icon?: string;
}
@Component({
  selector: 'app-free-trial',
  imports: [NgClass, TrialForm],
  templateUrl: './free-trial.html',
  styleUrl: './free-trial.css',
})
export class FreeTrial {
  programs: features[] = [
    {
      id: 1,
      title: 'اكتشاف عالم البرمجة',
      description: 'تعرف على جميع البرامج والمسارات التعليمية',
      classStyle: 'purple',
      icon: 'fa-solid fa-laptop-code',
    },
    {
      id: 2,
      title: 'التفاعل مع المدرب',
      description: 'في جلسة تفاعلية مع مدرب متخصص',
      classStyle: 'blue',
      icon: 'fa-solid fa-users',
    },
    {
      id: 3,
      title: 'تجربة أسلوب التعلم',
      description: 'تعرف على طريقتنا الممتعة في تعليم البرمجة',
      classStyle: 'green',
      icon: 'fa-solid fa-rocket',
    },
    {
      id: 4,
      title: 'معرفة مستوى طفلك',
      description: 'نحدد المستوى المناسب حسب عمره واحتياجاته',
      classStyle: 'orange',
      icon: 'fa-solid fa-trophy',
    },
  ];
}
