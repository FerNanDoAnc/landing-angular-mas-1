import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  formLanding: FormGroup = new FormGroup({});
  captchaResolved = false;

  comboFavoritos = [
    { Id: 1, name: 'Favorito 1' },
    { Id: 2, name: 'Favorito 2' },
    { Id: 3, name: 'Favorito 3' },
  ];

  constructor(private fb: FormBuilder, private route: Router) {}

  ngOnInit() {
    this.formLanding = this.fb.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Celular: ['', Validators.required],
      Correo: ['', [Validators.required, Validators.email]],
      IdFavorito: [0],
      Terminos: [false, Validators.requiredTrue],
      recaptcha: ['', Validators.required],
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

  verCategoria(opc: number) {
    switch (opc) {
      case 1:
        this.route.navigate(['/php-page']);
        break;
      case 2:
        this.route.navigate(['/python-page']);
        break;
      case 3:
        this.route.navigate(['/ui-page']);
        break;
    }
  }
}
