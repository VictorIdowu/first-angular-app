import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/Navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'This loaded dynamically';
  n1: number = 3;
  n2: number = 9;

  img: string =
    'https://hungrybynature.com/wp-content/uploads/2017/09/pinch-of-yum-workshop-19.jpg';

  isDisabled: boolean = true;
  isActive: boolean = false;

  toggleBtn(): void {
    this.isActive = !this.isActive;
  }

  currentNav: string = 'home';

  swithNav(nav: string): void {
    this.currentNav = nav;
  }

  isDanger: boolean = false;

  toggleDanger(): void {
    this.isDanger = !this.isDanger;
  }

  setTitle(name: any): void {
    this.title = name.target.value;
  }

  getInput(user: HTMLInputElement) {
    console.log(user.value);
  }

  userName: string = 'John Doe';

  updateUsername(username: HTMLInputElement) {
    this.userName = username.value;
  }

  setTitle2(): void {
    this.title = this.userName;
  }

  person = { name: 'Sam', age: 32 };

  showPerson() {
    console.log(this.person);
  }
}
