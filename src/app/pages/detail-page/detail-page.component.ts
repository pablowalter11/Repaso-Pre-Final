import { Component } from '@angular/core';
import { PersonajeDetailComponent } from '../../components/personaje-detail/personaje-detail.component';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [PersonajeDetailComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent {

}
