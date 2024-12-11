import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PersonajeService } from '../../services/personaje-service.service';

@Component({
  selector: 'app-personaje-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './personaje-card.component.html',
  styleUrl: './personaje-card.component.css'
})
export class PersonajeCardComponent{
  @Input()
  pj!: Personaje

  pjService = inject(PersonajeService)
  r = inject(Router)
  ar = inject(ActivatedRoute)

  deletePersonaje(id: any) {
    this.pjService.deletePersonaje(id).subscribe(
      {
        next: () => {
          console.log('El personaje ha sido eliminado!')
          this.r.navigateByUrl('')
            .then( () => {
              this.r.navigateByUrl('/list')
            }) 
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
