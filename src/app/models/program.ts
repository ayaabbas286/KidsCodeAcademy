import { Project } from './ProgramsProjects';

export type Theme = 'blue' | 'green' | 'orange' | 'purple';
export interface LearningStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProgramRequirements {
  previousExperience: string;
  devices: string[];
  technologies: string[];
}

export interface Program {
  title: string;
  value: string;
  ageRange: string;
  ageLabel: string;
  description: string;
  features: string[];
  icon: string;
  duration: string;
  projectsCount: number;
  theme: Theme;
  image: string;
  featuresImage: string;
  price: number;
  projects: Project[];
  classStyle: string;
  learningJourney: LearningStep[];
  requirements: ProgramRequirements;
}
