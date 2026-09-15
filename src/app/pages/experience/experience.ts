import { Component, ElementRef, QueryList, signal, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  @ViewChildren('counter') counters!: QueryList<ElementRef>;
  ngAfterViewInit(): void {
    this.counters.forEach((counter) => {
      const el = counter.nativeElement;
      const target = Number(el.dataset['target']);
      let start = 0;
      let step = 30;
      const interval = setInterval(() => {
        if (start < target) {
          start += step;

          el.textContent = `+${start}`;
        } else {
          clearInterval(interval);
        }
      }, 50);
    });
  }
}
