export type Theme = 'blue' | 'green' | 'orange' | 'purple';

export interface Program {
  title: string;
  value: string;
  ageRange: string;
  ageLabel: string;
  description: string;
  features: string[];
  icon:string;
  duration: string;
  projectsCount: number;
  theme: Theme;
  image: string;
  featuresImage: string;
    price: number;

}