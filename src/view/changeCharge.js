import {
  $,
  appendChilds,
  createElement,
  onKeyUpNumericEvent,
  getItemOrNull,
} from '../controller/utils.js';
import { makeChangeChargeTable, chargeCoin } from '../controller/changeCharge.js';
import { MENU } from '../model/constants.js';

const makeChargeInput = menu => {
  const chargeInput = createElement({
    tag: 'input',
    type: 'number',
    id: menu.chargeInputId,
    placeholder: menu.chargeInputPlaceholder,
  });
  chargeInput.addEventListener('keyup', () => onKeyUpNumericEvent(chargeInput));

  return chargeInput;
};

const makeChargeButton = (menu, table, chargeInput, chargeAmountValue) => {
  const chargeButton = createElement({
    tag: 'button',
    innerHTML: menu.chargeButton,
    id: menu.chargeButtonId,
  });
  chargeButton.addEventListener('click', () => chargeCoin(table, chargeInput, chargeAmountValue));

  return chargeButton;
};

const makeChargeAmountValue = menu => {
  const chargeAmountValue = createElement({ tag: 'span', id: menu.chargeAmountId });
  const vendingMachine = getItemOrNull('vendingMachine');
  if (vendingMachine) {
    chargeAmountValue.innerHTML = vendingMachine.change;
  }

  return chargeAmountValue;
};

const makeViewContents = () => {
  const menu = MENU('changeCharge');
  const chargeTitle = createElement({ tag: 'p', innerHTML: menu.chargeTitle });
  const chargeInput = makeChargeInput(menu);
  const chargeAmountValue = makeChargeAmountValue(menu);
  const chargeAmount = createElement({ tag: 'div', innerHTML: menu.chargeAmount });
  const coinAmountTitle = createElement({ tag: 'p', innerHTML: menu.coinAmountTitle });
  const table = makeChangeChargeTable(menu);
  chargeAmount.appendChild(chargeAmountValue);
  const chargeButton = makeChargeButton(menu, table, chargeInput, chargeAmountValue);

  return [chargeTitle, chargeInput, chargeButton, chargeAmount, coinAmountTitle, table];
};

export default function changeChargeView() {
  const $container = $('container');
  const viewContents = makeViewContents();

  appendChilds($container, viewContents);
}
