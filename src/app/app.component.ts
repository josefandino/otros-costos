import { Component } from '@angular/core';

import { AngularModule } from './shared/modules';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    AngularModule
  ],
})
export class AppComponent {
  title = 'otros-costos';
}
