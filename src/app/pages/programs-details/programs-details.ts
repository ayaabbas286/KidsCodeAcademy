import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-programs-details',
  imports: [NgClass],
  templateUrl: './programs-details.html',
  styleUrl: './programs-details.css',
})
export class ProgramsDetails {
  activeProgram = 0;
  programs = [
    {
      title: 'كل البرامج',
      value: 'all',
    },
    {
      title: 'المستكشف الصغير',
      value: 'little',
      ageRange: '5-8',
    },
    {
      title: 'المبرمج المبتدئ',
      value: 'beginner',
      ageRange: '8-10',
    },
    {
      title: 'المبرمج المبدع',
      value: 'creative',
      ageRange: '10-13',
    },
    {
      title: 'المبرمج المحترف',
      value: 'advanced',
      ageRange: '13-16',
    },
  ];
  selectProgram(index: number) {
    this.activeProgram = index;
  }
}
