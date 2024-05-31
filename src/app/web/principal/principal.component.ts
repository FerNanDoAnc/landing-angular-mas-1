import { Component } from '@angular/core';

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-principal',
  // standalone: true,
  // imports: [
  //   RouterOutlet,
  //   HeaderComponent,
  //   FooterComponent,
  //   ReactiveFormsModule,
  // ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss',
})
export class PrincipalComponent {

}
