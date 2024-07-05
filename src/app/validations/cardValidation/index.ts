export const VALIDATION_MESSAGES = {
  imageUrl: {
    required: 'Imagem Url é obrigatório',
    maxlength: 'Imagem Url deve ter no máximo 255 caracteres',
    url: 'URL inválido'
  },
  title: {
    required: 'Título é obrigatório',
    minlength: 'Título deve ter no mínimo 3 caracteres',
    maxlength: 'Título deve ter no máximo 255 caracteres'
  },
  description: {
    required: 'Descrição é obrigatória',
    minlength: 'Descrição deve ter no mínimo 10 caracteres',
    maxlength: 'Descrição deve ter no máximo 255 caracteres'
  },
  buttonLabel: {
    required: 'Texto do Botão é obrigatório',
    maxlength: 'Texto do Botão deve ter no máximo 100 caracteres'
  },
  buttonLink: {
    maxlength: 'Link do Botão deve ter no máximo 255 caracteres',
    url: 'URL inválido'
  },
  titleAlt: {
    minlength: 'Título Alt deve ter no mínimo 3 caracteres',
    maxlength: 'Título Alt deve ter no máximo 255 caracteres'
  }
};
