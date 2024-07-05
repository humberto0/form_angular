import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardService } from '../../../service/card.service';
import { Location } from '@angular/common';
import { Card } from '../../models/card';
import { GenericValidator } from '../../../validations/functionGenericValidation';
import { fromEvent, merge, Observable } from 'rxjs';
import { QuestionService } from '../../forms/form-card';
import { QuestionControlService } from '../../../service/question-control.service';
import { QuestionBase } from '../../forms/generic-form/question-base';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements AfterViewInit, OnInit {
  constructor(
    private cardService: CardService,
    private location: Location,
    private genericValidator: GenericValidator,
    private questionService: QuestionService,
    private qcs: QuestionControlService
  ) {}

  cardData: Card | undefined;
  form!: FormGroup;
  questions: QuestionBase<any>[] = [];
  displayMessage: { [key: string]: string } = {};

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions);
  }

  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(this.form.valueChanges, ...controlBlurs).pipe().subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.form);
    });
  }

  setClass(control: string) {
    return {
      'is-invalid': this.form.get(control)?.invalid && this.form.get(control)?.touched,
      'is-valid': this.form.get(control)?.valid && this.form.get(control)?.touched
    };
  }

  onSubmit() {
    if (this.form.valid) {
      this.cardData = Object.assign({}, this.cardData, this.form.value);
      this.loadCards(this.cardData ? this.cardData : {} as Card);
    }
  }

  async loadCards(formData: Card) {
    try {
      await this.cardService.createCard(formData);
      this.form.reset();
      this.location.back();
    } catch (error) {
      this.form.reset();
      console.error('Error loading cards:', error);
    }
  }
}
