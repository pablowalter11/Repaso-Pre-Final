import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonajeService } from '../../services/personaje-service.service';
import { Router } from '@angular/router';
import { sagaDisponible } from '../../validators/saga-disponible';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-personaje-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personaje-form.component.html',
  styleUrl: './personaje-form.component.css'
})
export class PersonajeFormComponent {
  pjService = inject(PersonajeService)
  r = inject(Router)
  fb = inject(FormBuilder)

  form = this.fb.nonNullable.group(
    {
      nombre: ['', Validators.required],
      saga: ['', [Validators.required, sagaDisponible]],
      primera_aparicion: ['', Validators.required],
    }
  )

  addPj() {
    if (this.form.invalid) return

    const pj = this.form.getRawValue()

    const primera = pj.primera_aparicion

    pj.primera_aparicion = pj.saga
    pj.primera_aparicion = pj.primera_aparicion + primera

    this.addPersonajeBdD(pj)
  }

  addPersonajeBdD(pj: Personaje) {
    this.pjService.postPersonaje(pj).subscribe(
      {
        next: (pj: Personaje) => {
          console.log(`${pj.nombre} ha sido cargado!`)
          this.r.navigateByUrl('/list')
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}

