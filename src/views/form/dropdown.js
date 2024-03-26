import { snakeCase } from '../../helpers/string.js';
import { div, label, select, option } from '../../helpers/string.js';

function dropdown({ title, options, onChange }) {
  const snakeTitle = snakeCase(title);
  const optionNodes = options.map(option);

  return div(
    label(snakeTitle, title),
    select(...optionNodes)
      .att('name', snakeTitle)
      .listen('change', onChange)
  ).id$(`${snakeTitle}-dropdown`)
}