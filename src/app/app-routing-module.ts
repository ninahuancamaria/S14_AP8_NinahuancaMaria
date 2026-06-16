import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Libros } from './pages/libros/libros';
import { Categorias } from './pages/categorias/categorias';
import { Contacto } from './pages/contacto/contacto';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'libros', component: Libros },
  { path: 'libros/:categoria', component: Libros },
  { path: 'categorias', component: Categorias },
  { path: 'contacto', component: Contacto }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
