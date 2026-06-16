import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { Libros } from './pages/libros/libros';
import { Categorias } from './pages/categorias/categorias';
import { Contacto } from './pages/contacto/contacto';

@NgModule({
  declarations: [App, Home, Libros, Categorias, Contacto],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
