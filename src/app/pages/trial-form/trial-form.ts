import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrialBooking } from '../../core/services/trial-booking';
import { TrialBookingRequest } from '../../models/trial-booking';

@Component({
  selector: 'app-trial-form',
  imports: [ReactiveFormsModule],
  templateUrl: './trial-form.html',
  styleUrl: './trial-form.css',
})
export class TrialForm {
  private fb = inject(FormBuilder);
  private trialService = inject(TrialBooking);
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';
  trialForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],

    phoneNumber: [
      '',
      [Validators.required, Validators.pattern(/^(?:\+20|0020|0)?1[0125][0-9]{8}$/)],
    ],

    childAge: this.fb.control<number | null>(null, [
      Validators.required,
      Validators.min(5),
      Validators.max(18),
    ]),

    program: ['', Validators.required],

    notes: ['', Validators.maxLength(500)],
  });
  isInvalid(controlName: string): boolean {
    const control = this.trialForm.get(controlName);

    return !!control && control.invalid && control.touched;
  }

  // Submit Form
  onSubmit(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.trialForm.invalid) {
      this.trialForm.markAllAsTouched();
      return;
    }

    const formValue = this.trialForm.getRawValue();

    const bookingData: TrialBookingRequest = {
      fullName: formValue.fullName!.trim(),
      phoneNumber: formValue.phoneNumber!.trim(),
      childAge: formValue.childAge!,
      program: formValue.program!,
      notes: formValue.notes?.trim() || '',
    };

    this.isSubmitting = true;

    this.trialService.createBooking(bookingData).subscribe({
      next: (response) => {
        this.successMessage = 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.';

        this.trialForm.reset();
        this.isSubmitting = false;
      },

      error: (error) => {
        this.errorMessage = 'حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.';

        this.isSubmitting = false;

        console.error('Booking Error:', error);
      },
    });
  }
}
