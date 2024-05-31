import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal.component';
import { RouterModule, Routes } from '@angular/router';
import { PhpPageComponent } from './php-page/php-page.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
    children:[
      {path:'php',component:PhpPageComponent}
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
