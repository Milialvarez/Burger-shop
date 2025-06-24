import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})export class LoginFormComponent {
  
  @Output() loginSuccess = new EventEmitter<void>();

  formLogIn = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    const email = this.formLogIn.value.email;
    const password = this.formLogIn.value.password;

    if (email === "burgerEmail@gmail.com" && password === "burgerPassword") {
      alert("SUCCESSFULLY LOGGED!")
      this.loginSuccess.emit();
    } else {
      alert("WRONG CREDENTIALS")
    }
  }
}


