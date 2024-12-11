import { Component } from '@angular/core';
import { PersonajeFormComponent } from '../../components/personaje-form/personaje-form.component';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [PersonajeFormComponent],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent {

}
