import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Libro {
  titulo: string;
  autor: string;
  categoriaId: string;
  categoriaNombre: string;
}

@Component({
  selector: 'app-libros',
  standalone: false,
  templateUrl: './libros.html',
  styleUrl: './libros.css',
})
export class Libros implements OnInit {
  todosLosLibros: Libro[] = [
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', categoriaId: 'ficcion', categoriaNombre: 'Ficción Realista' },
    { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', categoriaId: 'ficcion', categoriaNombre: 'Clásico Español' },
    { titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', categoriaId: 'ficcion', categoriaNombre: 'Literatura Infantil' },
    { titulo: '1984', autor: 'George Orwell', categoriaId: 'ciencia-ficcion', categoriaNombre: 'Distopía' },
    { titulo: 'Dune', autor: 'Frank Herbert', categoriaId: 'ciencia-ficcion', categoriaNombre: 'Ciencia Ficción' },
    { titulo: 'Sapiens', autor: 'Yuval Noah Harari', categoriaId: 'historia', categoriaNombre: 'Historia' },
    { titulo: 'El Diario de Ana Frank', autor: 'Ana Frank', categoriaId: 'historia', categoriaNombre: 'Biografía' },
    { titulo: 'Hábitos Atómicos', autor: 'James Clear', categoriaId: 'desarrollo', categoriaNombre: 'Desarrollo Personal' },
    { titulo: 'El Poder del Ahora', autor: 'Eckhart Tolle', categoriaId: 'desarrollo', categoriaNombre: 'Desarrollo Personal' },
    { titulo: 'Breve historia del tiempo', autor: 'Stephen Hawking', categoriaId: 'ciencia', categoriaNombre: 'Física' },
    { titulo: 'El gen egoísta', autor: 'Richard Dawkins', categoriaId: 'ciencia', categoriaNombre: 'Biología' }
  ];

  librosMostrados: Libro[] = [];
  categoriaActual: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoriaActual = params.get('categoria');
      if (this.categoriaActual) {
        this.librosMostrados = this.todosLosLibros.filter(l => l.categoriaId === this.categoriaActual);
      } else {
        this.librosMostrados = [...this.todosLosLibros];
      }
    });
  }
}
