import { $, appendChilds, createElement } from '../controller/utils.js';
import { makeChangeChargeTable } from '../controller/changeCharge.js';
import { MENU } from '../model/constants.js';

const makeChargeInput = menu =>
  createElement({
    tag: 'input',
    type: 'number',
    id: menu.chargeInputId,
    placeholder: menu.chargeInputPlaceholder,
  });

const makeChargeButton = menu =>
  createElement({ tag: 'button', innerHTML: menu.chargeButton, id: menu.chargeButtonId });

const makeViewContents = () => {
  const menu = MENU('changeCharge');
  const chargeTitle = createElement({ tag: 'p', innerHTML: menu.chargeTitle });
  const chargeInput = makeChargeInput(menu);
  const chargeButton = makeChargeButton(menu);
  const chargeAmount = createElement({ tag: 'p', innerHTML: menu.chargeAmount });
  const chargeAmountValue = createElement({ tag: 'span', id: menu.chargeAmountId });
  const coinAmountTitle = createElement({ tag: 'p', innerHTML: menu.coinAmountTitle });
  const table = makeChangeChargeTable(menu);

  return [
    chargeTitle,
    chargeInput,
    chargeButton,
    chargeAmount,
    chargeAmountValue,
    coinAmountTitle,
    table,
  ];
};

export default function changeChargeView() {
  const $container = $('container');
  const viewContents = makeViewContents();

  appendChilds($container, viewContents);
}
