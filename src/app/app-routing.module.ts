import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RetirosComponent } from './retiros/retiros.component';

const routes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'notFound/:id',
    // component:NotFoundComponent
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  
  {
    path: 'example',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'retiro',
    component:RetirosComponent
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
