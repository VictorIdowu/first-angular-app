import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class AppNavbar {
  isLoggedIn: boolean = false;
  userName: string = 'John Doe';

  items = ['Stone', 'Chair', 'House'];
}

// "./node_modules/fomantic-ui-css/semantic.min.css",
