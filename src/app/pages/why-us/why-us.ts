import { afterNextRender, Component, signal } from '@angular/core';

interface ICardWhyus {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-why-us',
  imports: [],
  templateUrl: './why-us.html',
  styleUrl: './why-us.css',
})
export class WhyUs {
  cards: ICardWhyus[] = [
    {
      icon: '🧠',
      title: 'تفكير منطقي',
      description: 'بنعلّم عيالكم يفكروا زي المبرمجين، خطوة خطوة.',
    },
    {
      icon: '🎮',
      title: 'تعلم باللعب',
      description: 'كل درس عبارة عن لعبة أو تحدي ممتع، مش حصة مملة.',
    },
    {
      icon: '🚀',
      title: 'مشاريع حقيقية',
      description: 'كل طفل بيخرج بمشروع بيبنيه بإيده من أول يوم.',
    },
    {
      icon: '👩‍🏫',
      title: 'معلمين متخصصين',
      description: 'فريق مدرّب خصيصي على التعامل مع الأطفال وتبسيط البرمجة.',
    },
  ];

  ready = signal(false);
  constructor() {
    afterNextRender(() => this.ready.set(true));
  }
}
