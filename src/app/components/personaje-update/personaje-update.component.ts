import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonajeService } from '../../services/personaje-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { sagaDisponible } from '../../validators/saga-disponible';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-personaje-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './personaje-update.component.html',
  styleUrl: './personaje-update.component.css'
})
export class PersonajeUpdateComponent implements OnInit{
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

  pjService = inject(PersonajeService)
  fb = inject(FormBuilder)
  r = inject(Router)
  ar = inject(ActivatedRoute)

  id: string | null = null

  form = this.fb.nonNullable.group(
    {
      nombre: ['', Validators.required],
      saga: ['', [Validators.required, sagaDisponible]],
      primera_aparicion: ['', Validators.required],
    }
  )

  getPjById(id: string | null) {
    this.pjService.getPersonajeById(id).subscribe(
      {
        next: (pj: Personaje) => {
          this.form.controls['nombre'].setValue(pj.nombre),
          this.form.controls['saga'].setValue(pj.saga),
          this.form.controls['primera_aparicion'].setValue(pj.primera_aparicion)
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }

  actualizar() {
    if (this.form.invalid) return

    const pj = this.form.getRawValue()

    this.putPjBdD(pj, this.id)
  }

  putPjBdD(pj: Personaje, id: string | null) {
    this.pjService.putPersonaje(pj, id).subscribe(
      {
        next: () => {
          console.log('Personaje Actualizado!')
          this.r.navigateByUrl('/list')
        },
        error: (e: Error) => {
          console.error(e.message)
        }
      }
    )
  }
}
