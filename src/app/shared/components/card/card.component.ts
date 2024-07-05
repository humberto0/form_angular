import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {  Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  styleUrls: ['./card.component.css'],
  templateUrl: './card.component.html',
})
export class CardComponent {
  constructor(
    private fb: FormBuilder,
  ) {}
  form = this.fb.group({
    titleImage: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(3)]],
  });

  isTitleEditing: boolean = false;

  @Input() imageUrl: string = '';
  @Input() titleAlt: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonLabel: string = '';
  @Input() buttonLink: string = '';

  ngOnInit() {
    this.form.get('titleImage')?.setValue(this.title || '');
  }

  get titleImage() {
    return this.form.get('titleImage');
  }

  toggleTitleEdit() {
    this.isTitleEditing = !this.isTitleEditing;
  }

  onSubmit() {
    if (this.form && this.form.valid) {
      this.title = this.form.value.titleImage?? '';
      this.isTitleEditing = false;
    }
  }
}
