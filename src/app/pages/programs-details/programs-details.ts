import { NgClass, NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-programs-details',
  imports: [NgClass, NgStyle],
  templateUrl: './programs-details.html',
  styleUrl: './programs-details.css',
})
export class ProgramsDetails implements AfterViewInit {
  @ViewChildren('tabBtn') tabButtons!: QueryList<ElementRef>;
  activeProgram = 0;
  pillStyle: { width: string; transform: string } = { width: '0px', transform: 'translateX(0)' };
  ngAfterViewInit(): void {
    setTimeout(() => this.updatePillPosition(), 0);
  }
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
    this.updatePillPosition();
  }
  private updatePillPosition() {
    const buttons = this.tabButtons.toArray();
    const activeBtn = buttons[this.activeProgram]?.nativeElement as HTMLElement;
    if (activeBtn) {
      this.pillStyle = {
        width: `${activeBtn.offsetWidth}px`,
        transform: `translateX(${activeBtn.offsetLeft}px)`,
      };
    }
  }
}
