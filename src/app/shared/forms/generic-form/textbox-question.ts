import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
  type: string;

  constructor(options: { value?: string, key?: string, label?: string, required?: boolean, order?: number, controlType?: string, type?: string } = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
