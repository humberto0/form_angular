import { Injectable, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GenericValidator {
  constructor(@Inject('VALIDATION_MESSAGES') private validationMessages: { [key: string]: { [key: string]: string } }) {}

  processarMensagens(container: FormGroup): { [key: string]: string } {
    const messages: any = {};
    for (const controlKey in container.controls) {
      if (container.controls.hasOwnProperty(controlKey)) {
        const c = container.controls[controlKey];
        if (c instanceof FormGroup) {
          const childMessages = this.processarMensagens(c);
          Object.assign(messages, childMessages);
        } else {
          if (this.validationMessages[controlKey]) {
            messages[controlKey] = '';
            if ((c.dirty || c.touched) && c.errors) {
              Object.keys(c.errors).map(messageKey => {
                if (this.validationMessages[controlKey][messageKey]) {
                  messages[controlKey] += this.validationMessages[controlKey][messageKey] + ' ';
                }
              });
            }
          }
        }
      }
    }
    return messages;
  }
}
