import { Service } from '@angular/core';
import { Program } from '../../models/program';

@Service()
export class Programs {
  private readonly programs: Program[] = [
    {
      title: 'المستكشف الصغير',
      value: 'little',
      icon: 'pi-face-smile',
      ageRange: '5-8',
      ageLabel: '5 - 8 سنوات',
      description:
        'برنامج ممتع وبسيط يعرّف طفلك بأساسيات البرمجة من خلال الألعاب والأنشطة التفاعلية',
      features: ['مفاهيم البرمجة الأساسية', 'التفكير المنطقي والإبداعي', 'بناء ألعاب بسيطة'],
      duration: 'شهرين',
      projectsCount: 2,
      theme: 'blue',
      image: 'assets/images/programs/explorer.png',
      featuresImage: 'assets/images/programsFeatures/ScratchJr.png',
      price: 1200,
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
      duration: 'شهرين ونص',
      projectsCount: 3,
      theme: 'green',
      image: 'assets/images/programs/beginner.png',
      price: 1500,
      featuresImage: 'assets/images/programsFeatures/ScratchJr.png',
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
      duration: '3 شهور',
      projectsCount: 4,
      theme: 'orange',
      image: 'assets/images/programs/inventor.png',
      price: 1800,
      featuresImage: 'assets/images/programsFeatures/ScratchJr.png',
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
      duration: '4 شهور ',
      projectsCount: 6,
      theme: 'purple',
      image: 'assets/images/programs/expertDev.png',
      price: 2200,
      featuresImage: 'assets/images/programsFeatures/ScratchJr.png',
    },
  ];

  getAll() {
    return this.programs;
  }

  getByValue(value: string) {
    console.log('searching for:', value);
    console.log(
      'available:',
      this.programs.map((p) => p.value),
    );
    return this.programs.find((p) => p.value === value);
  }
}
