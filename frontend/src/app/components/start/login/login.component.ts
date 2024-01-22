import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; //rufzeichen macht, dass diese variable definitiv später initialisiert wird
  isEmailActive: boolean = false;
  isPasswordActive: boolean = false;
  isPasswordVisible: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  //navigation
  login(): void {
    if(this.loginForm.valid) {
      console.log('logging in...');
      this.router.navigate(['/homepage']);
    }
  }

  //formGroup
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onInputFocus(field: string) {
    if (field === 'email') {
      this.isEmailActive = true;
    } else if (field === 'password') {
      this.isPasswordActive = true;
    }
  }

  onInputBlur(field: string) {
    if (field === 'email') {
      this.isEmailActive = !!this.loginForm?.get('email')?.value;
    } else if (field === 'password') {
      this.isPasswordActive = !!this.loginForm?.get('password')?.value;
    }
  }

  onButtonPressed() {
    this.isPasswordVisible = true;
  }

  onButtonReleased() {
    this.isPasswordVisible = false;
  }
}
