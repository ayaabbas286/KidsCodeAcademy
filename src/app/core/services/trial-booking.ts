import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment';
import { TrialBookingRequest } from '../../models/trial-booking';
import { Observable } from 'rxjs';

@Service()
export class TrialBooking {
  private http = inject(HttpClient);

  private apiUrl = `${environment.apiUrl}/api/TrialBookings`;

  createBooking(data: TrialBookingRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
