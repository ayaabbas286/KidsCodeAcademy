import { Component, inject } from '@angular/core';
import { Booking } from '../../../../shared/components/booking/booking';
import { ActivatedRoute } from '@angular/router';
import { Programs } from '../../../../core/services/programs';
import { IBookingItem } from '../../models/booking-item';
import { LearningPathsService } from '../../../../core/services/learning-paths';

@Component({
  selector: 'app-booking-page',
  imports: [Booking],
  templateUrl: './booking-page.html',
  styleUrl: './booking-page.css',
})
export class BookingPage {
  private route = inject(ActivatedRoute);
  private programsService = inject(Programs);
  private learningPathsService = inject(LearningPathsService);
  bookingValue = this.route.snapshot.paramMap.get('value');

  bookingItem?: IBookingItem;

  ngOnInit() {
    this.loadBookingItem();
  }
  loadBookingItem() {
    if (!this.bookingValue) return;
    const path = this.learningPathsService.getByValue(this.bookingValue);

    if (path) {
      this.bookingItem = {
        id: path.id,
        value: path.value,
        title: path.title,
        subtitle: path.subtitle,
        description: path.description,
        image: path.image,
        duration: path.duration,
        ageRange: path.ageRange,
        level: path.level,
        price: path.price,
        type: 'path',
      };

      return;
    }
    const program = this.programsService.getByValue(this.bookingValue);

    if (program) {
      this.bookingItem = {
        value: program.value,
        title: program.title,
        subtitle: program.description,
        description: program.description,
        image: program.image,
        duration: program.duration,
        ageRange: program.ageRange,
        price: program.price,
        type: 'program',
      };

      return;
    } // Item wasn't found in either service
    this.bookingItem = undefined;
  }
}
