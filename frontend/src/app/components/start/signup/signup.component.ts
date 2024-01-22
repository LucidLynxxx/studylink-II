import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  loginForm!: FormGroup;
  isEmailActive: boolean = false;
  isPasswordActive: boolean = false;
  isConfirmPasswordActive: boolean = false;
  isPasswordVisible: boolean = false;
  isConfirmPasswordVisible: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  //navigation
  directToLogin(): void {
    this.router.navigate(['/login']);
  }

  //formGroup
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onInputFocus(field: string) {
    if (field === 'email') {
      this.isEmailActive = true;
    } else if (field === 'password') {
      this.isPasswordActive = true;
    } else if (field === 'confirmPassword') {
      this.isConfirmPasswordActive = true;
    }
  }

  onInputBlur(field: string) {
    if (field === 'email') {
      this.isEmailActive = !!this.loginForm?.get('email')?.value;
    } else if (field === 'password') {
      this.isPasswordActive = !!this.loginForm?.get('password')?.value;
    } else if (field === 'confirmPassword') {
      this.isConfirmPasswordActive =
        !!this.loginForm?.get('confirmPassword')?.value;
    }
  }

  onButtonPressed() {
    this.isPasswordVisible = true;
  }

  onButtonReleased() {
    this.isPasswordVisible = false;
  }

  onButtonCPressed() {
    this.isConfirmPasswordVisible = true;
  }

  onButtonCReleased() {
    this.isConfirmPasswordVisible = false;
  }

  onSubmit() {
    const password = this.loginForm.get('password')?.value;
    const confirmPassword = this.loginForm.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      console.log('Passwörter sind identisch');
      this.directToLogin();
    } else {
      console.error('Passwörter stimmen nicht überein');
      // Hier kannst du weitere Logik für den Fehlerfall hinzufügen
    }
  }
}
