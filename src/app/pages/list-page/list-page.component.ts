import { Component } from '@angular/core';
import { PersonajeListComponent } from '../../components/personaje-list/personaje-list.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [PersonajeListComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {

}
