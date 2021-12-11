import {
  $,
  appendChilds,
  createElement,
  getItemOrNull,
  onKeyUpNumericEvent,
} from '../controller/utils.js';
import {
  makeProductStatusTable,
  makeReturnTable,
  addChargeInput,
  setAllPurchaseButtonEvent,
  returnChanges,
} from '../controller/productPurchase.js';
import { MENU } from '../model/constants.js';

const makeChargeInput = menu => {
  const chargeInput = createElement({
    tag: 'input',
    type: 'number',
    placeholder: '투입할 금액',
    id: menu.chargeInputId,
  });
  chargeInput.addEventListener('keyup', () => onKeyUpNumericEvent(chargeInput));

  return chargeInput;
};

const makeChargeButton = (chargeInput, chargeAmountValue, menu) => {
  const chargeButton = createElement({
    tag: 'button',
    innerHTML: menu.chargeButton,
    id: menu.chargeButtonId,
  });
  chargeButton.addEventListener('click', () => addChargeInput(chargeInput, chargeAmountValue));

  return chargeButton;
};

const makeChargeAmountValue = (chargeAmount, menu) => {
  const chargeAmountValue = createElement({ tag: 'span', id: menu.chargeAmountId });
  const chargeInput = getItemOrNull('chargeInput');
  if (chargeInput) {
    chargeAmountValue.innerHTML = chargeInput;
  }
  chargeAmount.appendChild(chargeAmountValue);

  return chargeAmountValue;
};

const makeReturnButton = (returnTable, menu) => {
  const returnButton = createElement({
    tag: 'button',
    innerHTML: menu.coinReturnButton,
    id: menu.coinReturnButtonId,
  });
  returnButton.addEventListener('click', () => returnChanges(returnTable));

  return returnButton;
};

const makeViewContents = () => {
  const menu = MENU('productPurchase');
  const returnMenu = MENU('return');
  const chargeInputTitle = createElement({ tag: 'p', innerHTML: menu.chargeInputTitle });
  const chargeInput = makeChargeInput(menu);
  const chargeAmount = createElement({ tag: 'div', innerHTML: menu.chargeAmount });
  const chargeAmountValue = makeChargeAmountValue(chargeAmount, menu);
  const chargeButton = makeChargeButton(chargeInput, chargeAmountValue, menu);
  const productStatusTitle = createElement({ tag: 'p', innerHTML: menu.productStatusTitle });
  const productStatusTable = makeProductStatusTable(menu);
  const returnTitle = createElement({ tag: 'p', innerHTML: returnMenu.returnTitle });
  const returnTable = makeReturnTable(returnMenu);
  const returnButton = makeReturnButton(returnTable, returnMenu);

  return [
    chargeInputTitle,
    chargeInput,
    chargeButton,
    chargeAmount,
    productStatusTitle,
    productStatusTable,
    returnTitle,
    returnButton,
    returnTable,
  ];
};

export default function productPurchaseView() {
  const $container = $('container');
  const viewContents = makeViewContents();

  appendChilds($container, viewContents);
  setAllPurchaseButtonEvent();
}
