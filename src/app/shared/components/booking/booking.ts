import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IBookingItem } from '../../../features/booking/models/booking-item';



@Component({
  selector: 'app-booking',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking implements OnInit {
  private fb = inject(FormBuilder);
  
  @Input() item!: IBookingItem;
  bookingForm!: FormGroup;
  submitted = false;
  isSuccess = false;
  private route = inject(ActivatedRoute);

  bookingValue = this.route.snapshot.paramMap.get('value');
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.bookingForm = this.fb.group({
      parentName: ['', [Validators.required, Validators.minLength(3)]],

      phone: ['', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],

      email: ['', Validators.email],

      childName: ['', [Validators.required, Validators.minLength(2)]],

      childAge: ['', Validators.required],

      preferredTime: ['', Validators.required],

      notes: [''],
    });
  }

  get f() {
    return this.bookingForm.controls;
  }

  submitBooking(): void {
    this.submitted = true;

    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    const bookingData = {
      ...this.bookingForm.value,

      itemId: this.item.id,
      itemValue: this.item.value,
      itemTitle: this.item.title,
      itemType: this.item.type,
      price: this.item.price,
    };

    console.log('Booking Data:', bookingData);

    // Later: send bookingData to backend

    this.isSuccess = true;
    this.bookingForm.reset();
    this.submitted = false;
  }
}
