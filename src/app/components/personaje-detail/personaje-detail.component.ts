import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeService } from '../../services/personaje-service.service';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-personaje-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personaje-detail.component.html',
  styleUrl: './personaje-detail.component.css'
})
export class PersonajeDetailComponent implements OnInit{
  ngOnInit(): void {
    this.ar.paramMap.subscribe(
      {
        next: (param) => {
          this.id = param.get('id')
          this.getPjById(this.id)
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )  
  }

  ar = inject(ActivatedRoute)
  pjService = inject(PersonajeService)

  id: string | null = null
  pj!: Personaje

  getPjById(id: string | null) {
    this.pjService.getPersonajeById(id).subscribe(
      {
        next: (pj: Personaje) => {
          this.pj = pj
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
