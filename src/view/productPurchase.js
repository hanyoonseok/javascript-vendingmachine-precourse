import { $, appendChilds, createElement, getItemOrNull } from '../controller/utils.js';
import { makeProductStatusTable, makeReturnTable } from '../controller/productPurchase.js';
import { MENU } from '../model/constants.js';

const makeChargeInput = menu => {
  const chargeInput = createElement({
    tag: 'input',
    type: 'number',
    placeholder: '투입할 금액',
    id: menu.chargeInputId,
  });

  return chargeInput;
};

const makeChargeButton = menu => {
  const chargeButton = createElement({
    tag: 'button',
    innerHTML: menu.chargeButton,
    id: menu.chargeButtonId,
  });

  return chargeButton;
};

const makeChargeAmountValue = (chargeAmount, menu) => {
  const chargeAmountValue = createElement({ tag: 'span', id: menu.chargeAmountId });
  const chargeInput = getItemOrNull('chargeInput');
  if (chargeInput) {
    chargeAmountValue.innerHTML = chargeInput;
  }
  chargeAmount.appendChild(chargeAmountValue);
};

const makeReturnButton = menu => {
  const returnButton = createElement({ tag: 'button', innerHTML: menu.coinReturnButton });

  return returnButton;
};

const makeViewContents = () => {
  const menu = MENU('productPurchase');
  const returnMenu = MENU('return');
  const chargeInputTitle = createElement({ tag: 'p', innerHTML: menu.chargeInputTitle });
  const chargeInput = makeChargeInput(menu);
  const chargeButton = makeChargeButton(menu);
  const chargeAmount = createElement({ tag: 'div', innerHTML: menu.chargeAmount });
  makeChargeAmountValue(chargeAmount, menu);
  const productStatusTitle = createElement({ tag: 'p', innerHTML: menu.productStatusTitle });
  const productStatusTable = makeProductStatusTable(menu);
  const returnTitle = createElement({ tag: 'p', innerHTML: returnMenu.returnTitle });
  const returnButton = makeReturnButton(returnMenu);
  const returnTable = makeReturnTable(returnMenu);

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
}
