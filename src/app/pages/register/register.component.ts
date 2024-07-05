import { Component } from '@angular/core';
import { RegisterFormComponent } from '../../shared/components/register-form/register-form.component';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { GenericValidator } from '../../validations/functionGenericValidation';
import { VALIDATION_MESSAGES } from '../../validations/cardValidation';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RegisterFormComponent, CommonModule],
  providers: [
    { provide: 'VALIDATION_MESSAGES', useValue: VALIDATION_MESSAGES },
    GenericValidator
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
