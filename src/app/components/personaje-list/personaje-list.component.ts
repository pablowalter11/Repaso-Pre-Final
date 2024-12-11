import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PersonajeCardComponent } from '../personaje-card/personaje-card.component';
import { PersonajeService } from '../../services/personaje-service.service';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-personaje-list',
  standalone: true,
  imports: [CommonModule, PersonajeCardComponent],
  templateUrl: './personaje-list.component.html',
  styleUrl: './personaje-list.component.css'
})
export class PersonajeListComponent implements OnInit{
  ngOnInit(): void {
    this.listarPersonajes()
  }

  pjService = inject(PersonajeService)

  personajes!: Personaje[]

  listarPersonajes() {
    this.pjService.getPersonajes().subscribe(
      {
        next: (pjs: Personaje[]) => {
          this.personajes = pjs
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
