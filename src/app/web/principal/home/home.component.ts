import { Component, OnInit, Signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  swiperElement: SwiperContainer | null = null;
  private isValidEmail = /\S+@\S+\.\S+/;
  formLanding: FormGroup = new FormGroup({});
  captchaResolved = false;

  comboFavoritos = [
    { Id: 1, name: 'Favorito 1' },
    { Id: 2, name: 'Favorito 2' },
    { Id: 3, name: 'Favorito 3' },
  ];

  constructor(private fb: FormBuilder, private route: Router) {}

  ngOnInit() {
    this.crearFormulario();
    this.configMySwiper();
  }

  crearFormulario():FormGroup{
    return this.formLanding = this.fb.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Celular: ['', [Validators.required, Validators.max(999999999),Validators.min(100000000)]],
      Correo: ['', [Validators.required, Validators.email, Validators.pattern(this.isValidEmail)]],
      IdFavorito: [0],
      Terminos: [false, Validators.requiredTrue],
      Datos: [false, Validators.requiredTrue],
      recaptcha: [''],
    })
  }

  resolved(captchaResponse: any) {
    this.captchaResolved = true;
    this.formLanding.controls['recaptcha'].setValue(captchaResponse);
  }

  guardar() {
    if (this.formLanding.valid) {
      // Lógica de envío del formulario
      Swal.fire({
        title: 'Registro exitoso',
        text: 'Se ha registrado correctamente al CyberDay 2024',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        this.formLanding.reset();
      });


    } else {
      Swal.fire({
        title: 'Error',
        text: 'Debe completar todos los campos del formulario',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
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

  configMySwiper(){
    const swiperElementConstructor = document.querySelector('swiper-container');
    const swiperOptions:SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
    };
    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement = swiperElementConstructor as SwiperContainer;
    this.swiperElement.swiper.init();
    this.swiperElement.swiper.autoplay.start();
    this.swiperElement.swiper.navigation.update();
    // navigation buttons
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');
    nextButton?.addEventListener('click', () => {
      this.swiperElement!.swiper.slideNext();
    });
    prevButton?.addEventListener('click', () => {
      this.swiperElement!.swiper.slidePrev();
    });
  }
}
