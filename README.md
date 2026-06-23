# BibliotecaApp

Este proyecto es el Frontend (aplicación web) para el sistema de Gestión de Biblioteca. Fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 21.

## 🚀 Despliegue en Render

El proyecto está configurado para poder ser desplegado en Render como un **Static Site**.
Configuración en Render:
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist/biblioteca-app/browser`
- **Redirects/Rewrites:** Regla para redirigir `/*` a `/index.html` (Rewrite) para que el enrutamiento de Angular funcione correctamente.

## 💻 Servidor de Desarrollo Local

Ejecuta el siguiente comando para iniciar el servidor local de desarrollo:

```bash
ng serve
```
Luego, navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si haces cambios en los archivos fuente.

## 🏗️ Construcción (Build)

Para construir el proyecto para producción, ejecuta:

```bash
ng build
```
Los archivos compilados y listos para producción se almacenarán en la carpeta `dist/biblioteca-app/browser`.

## 🧪 Pruebas (Testing)

Ejecuta `ng test` para correr las pruebas unitarias.

## 🛠️ Tecnologías y Herramientas

- **Framework:** Angular 21
- **Lenguaje:** TypeScript
- **Estilos:** CSS
- **Despliegue:** Render

---
*Desarrollado para el curso / proyecto.*
