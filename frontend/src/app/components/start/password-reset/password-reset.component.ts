import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent {
  loginForm!: FormGroup;
  isEmailActive: boolean = false;

  constructor(private fb: FormBuilder) {}

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
    }
  }

  onInputBlur(field: string) {
    if (field === 'email') {
      this.isEmailActive = !!this.loginForm?.get('email')?.value;
    }
  }
}
