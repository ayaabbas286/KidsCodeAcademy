import { Component, inject, signal  } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

type Role = 'student' | 'parent' | 'instructor' | 'admin';
type FieldName = 'fullName' | 'email' | 'password' | 'confirmPassword';
function passwordsMatch(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return password === confirm ? null : { mismatch: true };
}

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private fb = inject(FormBuilder);

  roles: { value: Role; label: string; icon: string }[] = [
    { value: 'student', label: 'طالب', icon: 'pi-graduation-cap' },
    { value: 'parent', label: 'ولي أمر', icon: 'pi-users' },
    { value: 'instructor', label: 'مدرب', icon: 'pi-user' },
    { value: 'admin', label: 'مشرف', icon: 'pi-shield' },
  ];
  showPassword = signal(false);
  showConfirm = signal(false);

  form = this.fb.nonNullable.group(
    {
      role: ['student' as Role, Validators.required],
      fullName: ['', Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: passwordsMatch,
    },
  );

  selectRole(role: Role) {
    this.form.controls['role'].setValue(role);
  }
  invalid(field: FieldName) {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || control.dirty);
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.getRawValue());
  }
}
