import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: ['USER', 'ADMIN'],
    children: [
      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: UserComponent,
        data: ['USER', 'ADMIN'],
      },
      {
        path: 'settings',
        canActivate: [AuthGuard],
        component: UserComponent,
        data: ['ADMIN'],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
