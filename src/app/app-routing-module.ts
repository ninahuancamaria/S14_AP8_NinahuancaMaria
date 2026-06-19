import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Libros } from './pages/libros/libros';
import { Categorias } from './pages/categorias/categorias';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './pages/login/login';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', component: Home, canActivate: [AuthGuard] },
  { path: 'libros', component: Libros, canActivate: [AuthGuard] },
  { path: 'libros/:categoria', component: Libros, canActivate: [AuthGuard] },
  { path: 'categorias', component: Categorias, canActivate: [AuthGuard] },
  { path: 'contacto', component: Contacto, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
