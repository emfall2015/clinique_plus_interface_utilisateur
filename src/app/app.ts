import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
<<<<<<< HEAD
  standalone: true,
  imports: [RouterOutlet],
=======
  imports: [RouterOutlet,RouterLink],
>>>>>>> 72d40bca180b9c65f4b3603167c9e769f3fa17a7
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('clinique_plus_interface_utilisateur');
}