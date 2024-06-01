import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal.component';
import { RouterModule, Routes } from '@angular/router';
import { PhpPageComponent } from './php-page/php-page.component';
import { HomeComponent } from './home/home.component';
import { PythonPageComponent } from './python-page/python-page.component';
import { UiPageComponent } from './ui-page/ui-page.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:'php-page',component:PhpPageComponent},
      {path:'python-page',component:PythonPageComponent},
      {path:'ui-page',component:UiPageComponent},
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
