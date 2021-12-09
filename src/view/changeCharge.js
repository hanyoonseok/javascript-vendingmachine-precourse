import { $, appendChilds, createElement } from '../controller/utils.js';
import { makeChangeChargeTable, chargeCoin } from '../controller/changeCharge.js';
import { MENU } from '../model/constants.js';

const makeChargeInput = menu =>
  createElement({
    tag: 'input',
    type: 'number',
    id: menu.chargeInputId,
    placeholder: menu.chargeInputPlaceholder,
  });

const makeChargeButton = (menu, table, chargeInput) => {
  const chargeButton = createElement({
    tag: 'button',
    innerHTML: menu.chargeButton,
    id: menu.chargeButtonId,
  });
  chargeButton.addEventListener('click', () => chargeCoin(table, chargeInput.value));

  return chargeButton;
};

const makeViewContents = () => {
  const menu = MENU('changeCharge');
  const chargeTitle = createElement({ tag: 'p', innerHTML: menu.chargeTitle });
  const chargeInput = makeChargeInput(menu);
  const chargeAmount = createElement({ tag: 'p', innerHTML: menu.chargeAmount });
  const chargeAmountValue = createElement({ tag: 'span', id: menu.chargeAmountId });
  const coinAmountTitle = createElement({ tag: 'p', innerHTML: menu.coinAmountTitle });
  const table = makeChangeChargeTable(menu);
  const chargeButton = makeChargeButton(menu, table, chargeInput);

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
