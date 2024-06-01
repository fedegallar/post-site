import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: '', loadComponent: () => import('./page/home/home.component').then(c => c.HomeComponent)},
  { path: 'login', loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) },
  { path: 'post/:postId', loadComponent: () => import('./page/post/post.component').then(c => c.PostComponent) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];