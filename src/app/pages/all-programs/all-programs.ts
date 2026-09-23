import { Component } from '@angular/core';
export interface IAllprograms {
  id: number;
  title: string;
  ageRange: string;
  ageIcon: string;
  description: string;
  features: string[];
  duration: string;
  projectsCount: string;
  characterImage: string;
  badgeLogo: string;
  colorTheme: 'blue' | 'yellow' | 'purple' | 'green';
  route: string;
}
@Component({
  selector: 'app-all-programs',
  imports: [],
  templateUrl: './all-programs.html',
  styleUrl: './all-programs.css',
})
export class AllPrograms {}
