import { Service, signal } from '@angular/core';

@Service()
export class LoaderService {
  isLoading = signal(false);
}
