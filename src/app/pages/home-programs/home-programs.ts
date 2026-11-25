import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Programs } from '../../core/services/programs';

@Component({
  selector: 'app-home-programs',
  imports: [RouterLink, NgClass],
  templateUrl: './home-programs.html',
  styleUrl: './home-programs.css',
})
export class HomePrograms {
  private programsService = inject(Programs);
  programs = this.programsService.getAll();
}
