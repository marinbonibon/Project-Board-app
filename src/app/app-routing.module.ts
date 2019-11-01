import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'login-page', loadChildren: './auth/auth.module#AuthModule' },
  // { path: 'board', loadChildren: './board/board.module#BoardModule', canLoad: [LoadingGuard], }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
