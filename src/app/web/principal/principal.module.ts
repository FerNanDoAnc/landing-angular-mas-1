import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared/footer/footer.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhpPageComponent } from './php-page/php-page.component';
import { HeaderComponent } from '../shared/header/header.component';
import { PrincipalComponent } from './principal.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { HomeComponent } from './home/home.component';
import { PythonPageComponent } from './python-page/python-page.component';
import { UiPageComponent } from './ui-page/ui-page.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrincipalRoutingModule,
    RouterOutlet,
    FormsModule,

    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  exports: [
    PrincipalComponent,
    PhpPageComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PythonPageComponent,
    UiPageComponent
  ],
  declarations: [
    PrincipalComponent,
    PhpPageComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PythonPageComponent,
    UiPageComponent
  ],
  providers: [

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PrincipalModule { }
