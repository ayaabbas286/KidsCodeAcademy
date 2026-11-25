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
      classStyle: 'explorer',
      description:
        'برنامج ممتع وبسيط يعرّف طفلك بأساسيات البرمجة من خلال الألعاب والأنشطة التفاعلية',
      features: ['مفاهيم البرمجة الأساسية', 'التفكير المنطقي والإبداعي', 'بناء ألعاب بسيطة'],
      duration: 'شهرين',
      projectsCount: 2,
      theme: 'blue',
      image: 'assets/images/programs/explorer.png',
      featuresImage: 'assets/images/programsFeatures/ScratchJr.png',
      price: 1200,
      projects: [
        {
          title: 'قصتي المتحركة',
          description:
            'يصمم الطفل قصة قصيرة بشخصيات وخلفيات متحركة، ويتعلم ترتيب الأوامر وإضافة الأصوات والحركة.',
          image: 'assets/images/programs-details/project1.webp',
        },
        {
          title: 'لعبة اجمع النجوم',
          description:
            'ينشئ الطفل لعبة يتحكم فيها بشخصية لجمع النجوم، ويتعلم الحركة والأحداث وتحديد هدف للفوز.',
          image: 'assets/images/programs-details/project2.png',
        },
      ],
      learningJourney: [
        {
          id: 1,
          title: 'اكتشف عالم البرمجة',
          description: 'يتعرف الطفل على مفهوم البرمجة من خلال الأنشطة التفاعلية.',
          icon: 'pi pi-compass',
        },
        {
          id: 2,
          title: 'تعرف على ScratchJr',
          description: 'يتعلم تحريك الشخصيات واستخدام أوامر البرمجة البسيطة.',
          icon: 'pi pi-play-circle',
        },
        {
          id: 3,
          title: 'اصنع قصتك',
          description: 'ينشئ قصة متحركة باستخدام الشخصيات والخلفيات.',
          icon: 'pi pi-book',
        },
        {
          id: 4,
          title: 'أنشئ لعبتك الأولى',
          description: 'يطبق ما تعلمه في تصميم لعبة تفاعلية بسيطة.',
          icon: 'pi pi-star',
        },
      ],

      requirements: {
        previousExperience: 'لا يحتاج الطفل إلى أي خبرة سابقة، فالبرنامج مناسب للمبتدئين تمامًا.',

        devices: ['جهاز كمبيوتر أو لابتوب', 'جهاز لوحي Tablet', 'اتصال بالإنترنت'],

        technologies: ['ScratchJr', 'التفكير المنطقي', 'البرمجة باستخدام الأوامر المرئية'],
      },
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
      classStyle: 'beginner',

      image: 'assets/images/programs/beginner.png',
      price: 1500,
      featuresImage: 'assets/images/programsFeatures/ScratchJr.png',
      projects: [
        {
          title: 'لعبة المتاهة',
          description:
            'يصمم الطفل لعبة بسيطة يتحكم فيها بشخصية للوصول إلى الهدف، ويتدرب على ترتيب الأوامر وحل المشكلات.',
          image: 'assets/images/projects/maze-game.png',
        },
        {
          title: 'لعبة تحدي الأسئلة',
          description:
            'ينشئ الطفل لعبة تفاعلية تعتمد على الأسئلة والإجابات، ويتعلم تنظيم خطوات البرنامج والتفاعل مع المستخدم.',
          image: 'assets/images/projects/quiz-game.png',
        },
        {
          title: 'تطبيق تفاعلي بسيط',
          description: 'يبني الطفل تطبيقًا بسيطًا يجمع بين العناصر التفاعلية والأفكار الإبداعية.',
          image: 'assets/images/projects/simple-app.png',
        },
      ],
      learningJourney: [
        {
          id: 1,
          title: 'أساسيات التفكير المنطقي',
          description: 'يتعلم حل المشكلات وترتيب خطوات تنفيذ الأوامر.',
          icon: 'pi pi-lightbulb',
        },
        {
          id: 2,
          title: 'ابدأ مع Scratch',
          description: 'يتعرف على الواجهة واللبنات البرمجية والأحداث.',
          icon: 'pi pi-code',
        },
        {
          id: 3,
          title: 'تعلم الحركة والتفاعل',
          description: 'ينشئ شخصيات متحركة ويتعلم استخدام الشروط والتكرار.',
          icon: 'pi pi-directions',
        },
        {
          id: 4,
          title: 'نفذ مشاريعك',
          description: 'يصمم ألعابًا وقصصًا تفاعلية باستخدام البرمجة.',
          icon: 'pi pi-trophy',
        },
      ],
      requirements: {
        previousExperience: 'لا يشترط وجود خبرة سابقة، وسيبدأ الطفل من أساسيات البرمجة.',

        devices: ['جهاز كمبيوتر أو لابتوب', 'ماوس', 'اتصال بالإنترنت'],

        technologies: ['Scratch', 'أساسيات البرمجة', 'الشروط والتكرار', 'التفكير المنطقي'],
      },
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
      classStyle: 'inventor',
      theme: 'orange',
      image: 'assets/images/programs/inventor.png',
      price: 1800,
      featuresImage: 'assets/images/programsFeatures/ScratchJr.png',
      projects: [
        {
          title: 'لعبة مغامرات تفاعلية',
          description:
            'يطور الطفل لعبة تفاعلية باستخدام JavaScript، مع التحكم في حركة الشخصيات والتعامل مع الأحداث.',
          image: 'assets/images/projects/adventure-game.png',
        },
        {
          title: 'تطبيق الطقس',
          description:
            'ينشئ الطفل تطبيقًا يعرض بيانات الطقس باستخدام APIs ويتعلم التعامل مع البيانات.',
          image: 'assets/images/projects/weather-app.png',
        },
        {
          title: 'لوحة تحكم تفاعلية',
          description: 'يصمم الطفل واجهة تفاعلية تعرض البيانات وتتيح للمستخدم التعامل معها بسهولة.',
          image: 'assets/images/projects/dashboard.png',
        },
      ],
      learningJourney: [
        {
          id: 1,
          title: 'فكر كمبرمج',
          description: 'يتعلم تحليل المشكلات وتحويل الأفكار إلى خطوات منطقية.',
          icon: 'pi pi-lightbulb',
        },
        {
          id: 2,
          title: 'اكتشف البرمجة',
          description: 'يتعرف على مفاهيم البرمجة الأساسية وينفذ أولى تجاربه.',
          icon: 'pi pi-code',
        },
        {
          id: 3,
          title: 'اصنع مشاريع تفاعلية',
          description: 'يستخدم المتغيرات والشروط والتكرار لبناء مشاريع أكثر تطورًا.',
          icon: 'pi pi-sliders-h',
        },
        {
          id: 4,
          title: 'أطلق إبداعك',
          description: 'يطور مشروعاته ويضيف إليها أفكاره ولمساته الخاصة.',
          icon: 'pi pi-palette',
        },
      ],
      requirements: {
        previousExperience:
          'يفضل أن يكون الطفل على معرفة مبدئية بأساسيات البرمجة أو سبق له استخدام Scratch.',

        devices: ['جهاز كمبيوتر أو لابتوب', 'ماوس', 'اتصال بالإنترنت'],

        technologies: ['HTML', 'CSS', 'أساسيات تصميم صفحات الويب', 'بناء مشاريع تفاعلية'],
      },
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
      classStyle: 'expertDev',

      projectsCount: 6,
      theme: 'purple',
      image: 'assets/images/programs/expertDev.png',
      price: 2200,
      featuresImage: 'assets/images/programsFeatures/ScratchJr.png',
      projects: [
        {
          title: 'منصة تعليمية',
          description: 'يبني الطفل منصة تعليمية تحتوي على صفحات متعددة وتجربة استخدام تفاعلية.',
          image: 'assets/images/projects/learning-platform.png',
        },
        {
          title: 'تطبيق إدارة المهام',
          description:
            'يطور تطبيقًا لإضافة المهام وتعديلها وحذفها وتنظيمها باستخدام Angular أو React.',
          image: 'assets/images/projects/task-manager.png',
        },
        {
          title: 'مشروع متكامل على GitHub',
          description:
            'ينفذ مشروع ويب متكامل ويرفعه على GitHub للتدرب على إدارة الكود وعرض أعماله.',
          image: 'assets/images/projects/github-project.png',
        },
      ],
      learningJourney: [
        {
          id: 1,
          title: 'أساسيات البرمجة',
          description: 'يفهم أساسيات كتابة الكود والتفكير البرمجي.',
          icon: 'pi pi-code',
        },
        {
          id: 2,
          title: 'تعلم بناء التطبيقات',
          description: 'يتعلم تنظيم الكود والتعامل مع الأدوات البرمجية.',
          icon: 'pi pi-desktop',
        },
        {
          id: 3,
          title: 'طور مهاراتك',
          description: 'يطبق المفاهيم المتقدمة في بناء مشاريع عملية.',
          icon: 'pi pi-cog',
        },
        {
          id: 4,
          title: 'أنشئ مشروعك النهائي',
          description: 'يخطط وينفذ مشروعًا متكاملًا يعبر عن مهاراته.',
          icon: 'pi pi-rocket',
        },
      ],
      requirements: {
        previousExperience:
          'يفضل أن يكون لدى الطفل معرفة سابقة بأساسيات البرمجة والتعامل مع الكمبيوتر.',

        devices: ['جهاز كمبيوتر أو لابتوب', 'ماوس', 'اتصال مستقر بالإنترنت'],

        technologies: ['HTML', 'CSS', 'JavaScript', 'أساسيات تطوير الويب', 'إنشاء مشاريع عملية'],
      },
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
