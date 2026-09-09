import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
export interface program {
  id: number;
  title: string;
  description: string[];
  ageRange: string;
  duration: string;
  level: string;
  price: number;
  image: string;
  skills: string[];
  link: string;
  classStyle: string;
  icon?: string;
}
@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './programs.html',
  styleUrl: './programs.css',
})
export class Programs {
  programs: program[] = [
    {
      id: 1,
      title: 'المستكشف الصغير',
      description: ['مفاهيم الحاسب الأساسية', 'التفكير المنطقي', 'ScratchJr ومشاريع إبداعية'],
      ageRange: '5 - 8 سنوات',
      duration: '3 أشهر',
      level: 'مبتدئ',
      price: 1200,
      image: 'assets/images/programs/explorer.png',
      skills: ['التفكير المنطقي', 'ScratchJr', 'حل المشكلات'],
      link: '/',
      classStyle: 'explorer',
      icon: 'fa-solid fa-wand-magic-sparkles',
    },
    {
      id: 2,
      title: 'المبرمج المبتدئ',
      description: [
        'Scratch  وأساسيات البرمجة',
        'المتغيرات والشروط والحلقات',
        'تطوير الألعاب والمشاريع ',
      ],
      ageRange: '8 - 10 سنوات',
      duration: '4 أشهر',
      level: 'مبتدئ',
      price: 1500,
      image: 'assets/images/programs/beginner.png',
      skills: ['Scratch', 'Loops', 'Conditions', 'Games'],
      link: '/',
      classStyle: 'beginner',
      icon: 'fa-solid fa-code',
    },
    {
      id: 3,
      title: 'المبرمج المبدع',
      description: [
        'Python الأساسيات والمتقدم',
        'الخوارزميات وحل المشكلات',
        'مشاريع برمجية حقيقية',
      ],
      ageRange: '10 - 13 سنة',
      duration: '5 أشهر',
      level: 'متوسط',
      price: 1800,
      image: 'assets/images/programs/inventor.png',
      skills: ['Python', 'Algorithms', 'Problem Solving'],
      link: '/',
      classStyle: 'inventor',
      icon: 'fa-brands fa-python',
    },
    {
      id: 4,
      title: 'المبرمج المحترف',
      description: ['تطوير الويب والتطبيقات', 'JavaScript و Frameworks', 'مشاريع متكامله احترافية'],
      ageRange: '13 - 16 سنة',
      duration: '6 أشهر',
      level: 'متقدم',
      price: 2200,
      image: 'assets/images/programs/expertDev.png',
      skills: ['Python', 'JavaScript', 'Web Development', 'APIs'],
      link: '/',
      classStyle: 'expertDev',
      icon: 'fa-regular fa-star',
    },
  ];
}
