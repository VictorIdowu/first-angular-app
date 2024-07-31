import {
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type user = { id: number; name: string; email: string };
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet,
    FormsModule,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgStyle,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class AppNavbar {
  isLoggedIn: boolean = true;
  userName: string = 'John Doe';

  items = ['Stone', 'Chair', 'House'];

  loginCount: number = 0;

  countLoginAttempts() {
    this.loginCount++;
  }

  newNavs = ['Home', 'Work', 'Road'];
  activeNav = 'Home';
  switchNav(item: string) {
    this.activeNav = item;
  }
  //
  users = [
    { id: 1, name: 'Collins', email: 'collins@gmail.com' },
    { id: 2, name: 'Davis', email: 'davis@gmail.com' },
    { id: 3, name: 'Tom', email: 'tom@gmail.com' },
    { id: 4, name: 'Bayo', email: 'bayo@gmail.com' },
  ];

  // constructor() {
  //   console.log(this.users.length);
  // }

  newUser = { name: '', email: '' };
  addNewUser() {
    const newPerson = {
      id: this.users.length + 1,
      ...this.newUser,
    };
    this.users.unshift(newPerson);
  }
  deleteItem(i: number) {
    this.users.splice(i, 1);
  }

  usersRole: string = '';
}

// "./node_modules/fomantic-ui-css/semantic.min.css",
