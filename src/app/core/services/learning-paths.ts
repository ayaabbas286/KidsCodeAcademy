import { Service } from '@angular/core';
import { ILearningPaths } from '../../models/LearningPath';

@Service()
export class LearningPathsService {
  private learningPathsService: ILearningPaths[] = [
    {
      id: 1,
      value: 'web-development',
      title: 'تطوير الويب',
      subtitle: 'ابدأ رحلتك في عالم تطوير مواقع الويب',
      description:
        'تعلم تصميم وتطوير مواقع الويب من البداية، بداية من بناء صفحات الويب وحتى إضافة التفاعل وإنشاء مشاريع متكاملة.',

      icon: 'assets/images/imagePaths/landing-page.png',
      image: 'assets/images/imagePaths/landing-page.png',
      classStyle: 'web',

      ageRange: '10 - 16 سنة',
      duration: '6 أشهر',
      level: 'مبتدئ',
      price: 3000,
      skills: [
        'تصميم صفحات الويب',
        'تنسيق المواقع',
        'برمجة التفاعلات',
        'حل المشكلات',
        'إنشاء مواقع متكاملة',
      ],

      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],

      projects: [
        'إنشاء صفحة شخصية',
        'تصميم موقع تعليمي',
        'إنشاء لعبة تفاعلية',
        'إنشاء مشروع ويب متكامل',
      ],

      learningJourney: [
        {
          id: 1,
          title: 'HTML',
          description: 'تعلم بناء هيكل صفحات الويب.',
          icon: 'pi pi-code',
        },
        {
          id: 2,
          title: 'CSS',
          description: 'تعلم تنسيق وتصميم صفحات الويب.',
          icon: 'pi pi-palette',
        },
        {
          id: 3,
          title: 'JavaScript',
          description: 'إضافة التفاعل والحركة للمواقع.',
          icon: 'pi pi-bolt',
        },
        {
          id: 4,
          title: 'Projects',
          description: 'تطبيق المهارات في مشاريع حقيقية.',
          icon: 'pi pi-folder',
        },
      ],

      requirements: {
        previousExperience: 'لا يشترط وجود خبرة سابقة.',
        devices: ['جهاز كمبيوتر أو لابتوب', 'اتصال بالإنترنت'],
      },

      route: '/paths/web-development',
    },

    {
      id: 2,
      value: 'artificial-intelligence',
      title: 'الذكاء الاصطناعي',
      subtitle: 'اكتشف عالم الذكاء الاصطناعي',
      description:
        'تعرف على مفاهيم الذكاء الاصطناعي وتعلم كيفية استخدامه وإنشاء تطبيقات ذكية بطريقة مبسطة ومناسبة للطلاب.',

      icon: 'assets/images/imagePaths/artificial-intelligence.png',
      image: 'assets/images/imagePaths/artificial-intelligence.png',
      classStyle: 'ai',

      ageRange: '12 - 16 سنة',
      duration: '5 أشهر',
      level: 'مبتدئ',

      skills: [
        'التفكير المنطقي',
        'حل المشكلات',
        'فهم الذكاء الاصطناعي',
        'التعامل مع البيانات',
        'إنشاء تطبيقات ذكية',
      ],

      technologies: ['AI Tools', 'Machine Learning', 'Python'],

      projects: ['إنشاء chatbot', 'تصنيف الصور', 'مشروع ذكاء اصطناعي بسيط'],

      learningJourney: [
        {
          id: 1,
          title: 'AI Basics',
          description: 'التعرف على مفهوم الذكاء الاصطناعي.',
          icon: 'pi pi-lightbulb',
        },
        {
          id: 2,
          title: 'AI Tools',
          description: 'التعامل مع أدوات الذكاء الاصطناعي.',
          icon: 'pi pi-wrench',
        },
        {
          id: 3,
          title: 'Machine Learning',
          description: 'التعرف على أساسيات تعلم الآلة.',
          icon: 'pi pi-chart-line',
        },
        {
          id: 4,
          title: 'Projects',
          description: 'إنشاء تطبيقات ومشاريع ذكية.',
          icon: 'pi pi-folder',
        },
      ],

      requirements: {
        previousExperience: 'لا يشترط وجود خبرة سابقة.',
        devices: ['جهاز كمبيوتر أو لابتوب', 'اتصال بالإنترنت'],
      },
      price: 3500,
      route: '/paths/artificial-intelligence',
    },

    {
      id: 3,
      value: 'graphic-design',
      title: 'تصميم الجرافيك',
      subtitle: 'حوّل أفكارك إلى تصميمات إبداعية',
      description:
        'تعلم أساسيات التصميم والألوان والتكوين، وابدأ في إنشاء تصميمات رقمية باستخدام أشهر أدوات التصميم.',

      icon: 'assets/images/imagePaths/brush.png',
      image: 'assets/images/imagePaths/brush.png',
      classStyle: 'graphic',

      ageRange: '10 - 16 سنة',
      duration: '4 أشهر',
      level: 'مبتدئ',

      skills: [
        'أساسيات التصميم',
        'نظرية الألوان',
        'التنسيق البصري',
        'تصميم الشعارات',
        'تصميم المنشورات',
      ],

      technologies: ['Photoshop', 'Illustrator', 'Canva'],

      projects: ['تصميم شعار', 'تصميم بوستر', 'تصميم منشورات', 'إنشاء هوية بصرية بسيطة'],

      learningJourney: [
        {
          id: 1,
          title: 'Design Basics',
          description: 'التعرف على مبادئ التصميم.',
          icon: 'pi pi-palette',
        },
        {
          id: 2,
          title: 'Colors',
          description: 'تعلم الألوان والتناسق.',
          icon: 'pi pi-star',
        },
        {
          id: 3,
          title: 'Design Tools',
          description: 'التعامل مع أدوات التصميم.',
          icon: 'pi pi-pencil',
        },
        {
          id: 4,
          title: 'Projects',
          description: 'إنشاء تصميمات متنوعة.',
          icon: 'pi pi-folder',
        },
      ],

      requirements: {
        previousExperience: 'لا يشترط وجود خبرة سابقة.',
        devices: ['جهاز كمبيوتر أو لابتوب', 'اتصال بالإنترنت'],
      },
      price: 2500,
      route: '/paths/graphic-design',
    },

    {
      id: 4,
      value: 'mobile-development',
      title: 'تطوير تطبيقات الموبايل',
      subtitle: 'تعلم إنشاء تطبيقات الهاتف',
      description:
        'تعلم كيفية تصميم وإنشاء تطبيقات الموبايل، وفهم أساسيات البرمجة وتطوير التطبيقات خطوة بخطوة.',

      icon: 'assets/images/imagePaths/code.png',
      image: 'assets/images/imagePaths/code.png',
      classStyle: 'mobile',

      ageRange: '10 - 16 سنة',
      duration: '5 أشهر',
      level: 'مبتدئ',

      skills: [
        'أساسيات البرمجة',
        'تصميم واجهات التطبيقات',
        'التفكير المنطقي',
        'إنشاء تطبيقات تفاعلية',
      ],

      technologies: ['MIT App Inventor', 'Flutter', 'Dart'],

      projects: ['تطبيق آلة حاسبة', 'تطبيق تعليمي', 'تطبيق تفاعلي'],

      learningJourney: [
        {
          id: 1,
          title: 'Programming Basics',
          description: 'تعلم أساسيات البرمجة.',
          icon: 'pi pi-code',
        },
        {
          id: 2,
          title: 'App Design',
          description: 'تصميم واجهات التطبيقات.',
          icon: 'pi pi-mobile',
        },
        {
          id: 3,
          title: 'App Development',
          description: 'بناء تطبيقات الموبايل.',
          icon: 'pi pi-cog',
        },
        {
          id: 4,
          title: 'Projects',
          description: 'تنفيذ تطبيقات عملية.',
          icon: 'pi pi-folder',
        },
      ],

      requirements: {
        previousExperience: 'لا يشترط وجود خبرة سابقة.',
        devices: ['جهاز كمبيوتر أو لابتوب', 'اتصال بالإنترنت'],
      },
      price: 3000,
      route: '/paths/mobile-development',
    },

    {
      id: 5,
      value: 'robotics-iot',
      title: 'الروبوتات وإنترنت الأشياء',
      subtitle: 'اصنع روبوتك وتعلم التكنولوجيا',
      description:
        'اكتشف عالم الروبوتات والإلكترونيات وتعلم كيفية بناء وبرمجة الروبوتات وربط الأجهزة ببعضها.',

      icon: 'assets/images/imagePaths/robot.png',
      image: 'assets/images/imagePaths/robot.png',
      classStyle: 'robot',

      ageRange: '10 - 16 سنة',
      duration: '6 أشهر',
      level: 'مبتدئ',

      skills: [
        'أساسيات الإلكترونيات',
        'البرمجة',
        'التفكير الهندسي',
        'حل المشكلات',
        'تصميم الروبوتات',
      ],
      price: 4000,
      technologies: ['Arduino', 'Sensors', 'Robotics', 'IoT'],

      projects: ['روبوت يتحرك', 'نظام إضاءة ذكي', 'مشروع باستخدام الحساسات'],

      learningJourney: [
        {
          id: 1,
          title: 'Electronics',
          description: 'التعرف على أساسيات الإلكترونيات.',
          icon: 'pi pi-bolt',
        },
        {
          id: 2,
          title: 'Arduino',
          description: 'تعلم برمجة Arduino.',
          icon: 'pi pi-code',
        },
        {
          id: 3,
          title: 'Robotics',
          description: 'التعرف على الروبوتات.',
          icon: 'pi pi-cog',
        },
        {
          id: 4,
          title: 'Projects',
          description: 'إنشاء مشاريع عملية.',
          icon: 'pi pi-folder',
        },
      ],

      requirements: {
        previousExperience: 'لا يشترط وجود خبرة سابقة.',
        devices: ['جهاز كمبيوتر أو لابتوب', 'أدوات الروبوتات حسب المشروع'],
      },

      route: '/paths/robotics-iot',
    },

    {
      id: 6,
      value: 'game-development',
      title: 'تطوير الألعاب',
      subtitle: 'صمم وطور ألعابك الخاصة',
      description:
        'تعلم تصميم الألعاب وفهم منطقها، وإنشاء ألعاب تفاعلية باستخدام أدوات البرمجة ومحركات الألعاب.',

      icon: 'assets/images/imagePaths/game-console.png',
      image: 'assets/images/imagePaths/game-console.png',
      classStyle: 'games',

      ageRange: '10 - 16 سنة',
      duration: '5 أشهر',
      level: 'مبتدئ',

      skills: [
        'Game Design',
        'التفكير المنطقي',
        'برمجة الألعاب',
        'تصميم الشخصيات',
        'إنشاء الألعاب التفاعلية',
      ],

      technologies: ['Scratch', 'Unity', 'C#'],

      projects: ['لعبة بسيطة', 'لعبة متاهة', 'لعبة منصات', 'مشروع لعبة متكاملة'],

      learningJourney: [
        {
          id: 1,
          title: 'Game Basics',
          description: 'التعرف على أساسيات تصميم الألعاب.',
          icon: 'pi pi-gamepad',
        },
        {
          id: 2,
          title: 'Programming',
          description: 'تعلم منطق برمجة الألعاب.',
          icon: 'pi pi-code',
        },
        {
          id: 3,
          title: 'Game Design',
          description: 'تصميم الشخصيات والمراحل.',
          icon: 'pi pi-palette',
        },
        {
          id: 4,
          title: 'Projects',
          description: 'إنشاء ألعاب خاصة بك.',
          icon: 'pi pi-folder',
        },
      ],
      price: 3000,
      requirements: {
        previousExperience: 'لا يشترط وجود خبرة سابقة.',
        devices: ['جهاز كمبيوتر أو لابتوب', 'اتصال بالإنترنت'],
      },

      route: '/paths/game-development',
    },
  ];

  getAll(): ILearningPaths[] {
    return this.learningPathsService;
  }

  getByValue(value: string): ILearningPaths | undefined {
    return this.learningPathsService.find((path) => path.value === value);
  }

  getById(id: number): ILearningPaths | undefined {
    return this.learningPathsService.find((path) => path.id === id);
  }
}
