import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-section',
  standalone: false,
  templateUrl: './admin-section.component.html',
  styleUrl: './admin-section.component.scss'
})
export class AdminSectionComponent {
 isLoggedIn = false;

  handleLoginSuccess() {
    this.isLoggedIn = true;
  }
}
