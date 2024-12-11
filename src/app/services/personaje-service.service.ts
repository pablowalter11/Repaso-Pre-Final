import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  http = inject(HttpClient)

  urlBase = environment.urlBase

  getPersonajes(): Observable<Personaje[]>{
    return this.http.get<Personaje[]>(this.urlBase)
  }

  getPersonajeById(id: string | null): Observable<Personaje>{
    return this.http.get<Personaje>(`${this.urlBase}/${id}`)
  }

  postPersonaje(pj: Personaje): Observable<Personaje>{
    return this.http.post<Personaje>(this.urlBase, pj)
  }

  putPersonaje(pj: Personaje, id: string | null): Observable<Personaje>{
    return this.http.put<Personaje>(`${this.urlBase}/${id}`, pj)
  }

  deletePersonaje(id: any): Observable<void>{
    return this.http.delete<void>(`${this.urlBase}/${id}`)
  }
}
