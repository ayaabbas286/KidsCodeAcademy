import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Login } from '../../features/auth/login/login';

@Component({
  selector: 'app-get-started',
  imports: [RouterLink],
  templateUrl: './get-started.html',
  styleUrl: './get-started.css',
})
export class GetStarted {}
