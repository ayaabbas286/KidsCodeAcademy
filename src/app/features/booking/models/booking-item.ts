export interface IBookingItem {
  id?: number;
  value: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  duration: string;
  ageRange: string;
  level?: string;
  price: number;
  type: 'path' | 'program';
}