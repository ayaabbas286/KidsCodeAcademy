import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Logo],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}
