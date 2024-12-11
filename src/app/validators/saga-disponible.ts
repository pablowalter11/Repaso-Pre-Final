import { AbstractControl, ValidationErrors } from "@angular/forms";

export function sagaDisponible(control: AbstractControl): ValidationErrors | null {
    const valor = control.value
    if (valor && !['Mortal Kombat','Street Fighter','Tekken'].includes(valor)) {
        return { 'No pertenece a una saga de peleas disponible': true }
    }
    return null
}