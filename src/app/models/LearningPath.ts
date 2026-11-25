export interface ILearningPaths {
  id: number;
  value: string;
  title: string;
  subtitle: string;
  description: string;

  icon: string;
  image: string;
  classStyle: string;

  ageRange: string;
  duration: string;
  level: string;

  skills: string[];
  technologies: string[];

  projects: string[];

  learningJourney: LearningJourney[];

  requirements: PathRequirements;
  price: number;
  route: string;
}

export interface LearningJourney {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PathRequirements {
  previousExperience: string;
  devices: string[];
}
