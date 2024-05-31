import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',
    loadChildren:()=>import('./web/principal/principal.module').then(mod=>mod.PrincipalModule)
  },
  // {
  //   path: '**',
  //   redirectTo: ''
  // }
];
