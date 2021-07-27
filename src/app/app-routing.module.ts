import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: () => import('./auth/components/login/login.module').then( (mod) => mod.LoginModule)
  // },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./views/about/about.module').then((mod) => mod.AboutModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./views/not-found/not-found.module').then(
        (mod) => mod.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
