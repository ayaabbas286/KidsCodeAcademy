import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
export interface BreadcrumbItem {
  label: string;
  route?: string;
}
@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink,CommonModule],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
})
export class Breadcrumb {

  @Input() items: BreadcrumbItem[] = [];
}
