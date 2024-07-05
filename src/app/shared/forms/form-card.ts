import { Injectable } from '@angular/core';
import { TextboxQuestion } from './generic-form/textbox-question';
import { QuestionBase } from './generic-form/question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'imageUrl',
        label: 'Imagem Url',
        value: '',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'title',
        label: 'Titulo Card',
        value: '',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'description',
        label: 'Descrição',
        value: '',
        required: true,
        order: 3
      }),
      new TextboxQuestion({
        key: 'buttonLabel',
        label: 'Texto do Botão',
        value: '',
        required: true,
        order: 4
      }),
      new TextboxQuestion({
        key: 'buttonLink',
        label: 'Link do Botão',
        value: '',
        order: 5
      }),
      new TextboxQuestion({
        key: 'titleAlt',
        label: 'Titulo Alt Imagem',
        value: '',
        order: 6
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}
