import { Component } from '@angular/core';
import { PersonajeUpdateComponent } from '../../components/personaje-update/personaje-update.component';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [PersonajeUpdateComponent],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.css'
})
export class UpdatePageComponent {

}
