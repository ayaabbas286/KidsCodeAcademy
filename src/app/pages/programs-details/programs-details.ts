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
    },
    {
      title: 'المبرمج المبتدئ',
      value: 'beginner',
    },
    {
      title: 'المبرمج المبدع',
      value: 'creative',
    },
    {
      title: 'المبرمج المحترف',
      value: 'advanced',
    },
  ];
  selectProgram(index: number) {
    this.activeProgram = index;
  }
}
