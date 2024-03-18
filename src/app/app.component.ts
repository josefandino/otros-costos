import { Component } from '@angular/core';

import { AngularModule, MaterialModule } from './shared/modules';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth/store/auth.reduce';
import { SidebarComponent } from "./loyouts/sidebar/sidebar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        AngularModule,
        MaterialModule,
        StoreModule,
        SidebarComponent
    ]
})
export class AppComponent {
  title = 'otros-costos';
}
