import { div, p, img } from '../../helpers/dom.js';
import { formatPrice } from '../../helpers/price.js';

const Game = ({ id, title, image, pricing }) => {
  return (
    div(
      p(title).class('text-sm md:text-lg lg:text-xl font-bold'),
      img(image).class('h-fit w-auto overflow-hidden'),
      div(
        p(`Loose: ${formatPrice(pricing.loose)}`),
        p(`Complete: ${formatPrice(pricing.complete)}`),
        p(`New: ${formatPrice(pricing.new)}`),
        p(`Graded: ${formatPrice(pricing.graded)}`),
        
      ).class('flex flex-col'),
    ).id$(`game-${id}`).class('flex flex-col gap-2 items-center m-4')
  );
}

export { Game }

