import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  formLanding: FormGroup = new FormGroup({});
  captchaResolved = false;

  comboFavoritos = [
    { Id: 1, name: 'Favorito 1' },
    { Id: 2, name: 'Favorito 2' },
    { Id: 3, name: 'Favorito 3' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formLanding = this.fb.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Celular: ['', Validators.required],
      Correo: ['', [Validators.required, Validators.email]],
      IdFavorito: [0],
      Terminos: [false, Validators.requiredTrue],
      recaptcha: ['', Validators.required]
    });
  }

  resolved(captchaResponse: any) {
    this.captchaResolved = true;
    this.formLanding.controls['recaptcha'].setValue(captchaResponse);
  }

  guardar() {
    if (this.formLanding.valid) {
      // Lógica de envío del formulario
      console.log('Formulario válido:', this.formLanding.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  misFavoritos(event: any) {
    // Lógica para manejar el cambio en los favoritos
    console.log('Favorito seleccionado:', event.target.value);
  }
}
