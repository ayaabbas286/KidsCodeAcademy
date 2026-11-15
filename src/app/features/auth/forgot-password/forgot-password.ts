import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  private fb = inject(FormBuilder);

  sent = signal(false);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  get emailInvalid() {
    const c = this.form.controls.email;
    return c.invalid && (c.touched || c.dirty);
  }
    submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('reset link requested for:', this.form.getRawValue().email);
    this.sent.set(true);
  }

  tryAnotherEmail() {
    this.form.reset();
    this.sent.set(false);
  }
}
