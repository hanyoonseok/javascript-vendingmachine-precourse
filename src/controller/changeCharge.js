import {
  createElement,
  appendChilds,
  setAllData,
  getItemOrNull,
  isInputNumberValid,
} from './utils.js';
import { tableTemplate, makeTableHeader } from './template.js';
import { MENU, COIN_ARRAY } from '../model/constants.js';
import VendingMachine from '../model/vendingMachine.js';

const makeVendingMachineRow = vendingMachine =>
  vendingMachine.coins.map(row => {
    const trTag = createElement({ tag: 'tr' });
    const coin = createElement({ tag: 'td', innerHTML: `${row.coin}원` });
    const quantity = createElement({
      tag: 'td',
      innerHTML: `${row.quantity}개`,
      className: `vending-machine-coin-${row.coin}-quantity`,
    });
    appendChilds(trTag, [coin, quantity]);

    return trTag;
  });

const makeEmptyRow = () => {
  const emptyRows = COIN_ARRAY.map(won => {
    const trTag = createElement({ tag: 'tr' });
    const coin = createElement({ tag: 'td', innerHTML: `${won}원` });
    const empty = createElement({
      tag: 'td',
      innerHTML: '',
      className: `vending-machine-coin-${won}-quantity`,
    });
    appendChilds(trTag, [coin, empty]);

    return trTag;
  });

  return emptyRows;
};

const makeTableRows = () => {
  const vendingMachine = getItemOrNull('vendingMachine');
  let tableRows;
  if (vendingMachine) {
    tableRows = makeVendingMachineRow(vendingMachine);
  } else if (vendingMachine === null) {
    tableRows = makeEmptyRow();
  }

  return tableRows;
};

export const makeChangeChargeTable = menu => {
  const table = tableTemplate(menu);
  const tableRows = makeTableRows();
  appendChilds(table, tableRows);

  return table;
};

const tableRefresh = table => {
  const menu = MENU('changeCharge');
  const tableHeader = makeTableHeader(menu);
  const tableRows = makeTableRows(menu);

  table.innerHTML = '';
  appendChilds(table, tableHeader);
  appendChilds(table, tableRows);
};

const makeRandomAmount = inputValue => {
  const amountArray = COIN_ARRAY.map(coin => {
    let randomNumber = 0;
    const range = Array.from({ length: inputValue / coin + 1 }, (v, i) => i);
    randomNumber = MissionUtils.Random.pickNumberInList(range);
    inputValue -= coin * randomNumber;
    return randomNumber;
  });
  if (inputValue !== 0) {
    amountArray[3] += inputValue / 10;
  }

  return amountArray;
};

const initDomProperty = (chargeAmountValue, chargeInput) => {
  chargeAmountValue.innerHTML = getItemOrNull('vendingMachine').change;
  chargeInput.value = '';
};

export const chargeCoin = (table, chargeInput, chargeAmountValue) => {
  if (isInputNumberValid(chargeInput.placeholder, chargeInput.value)) {
    let vendingMachine = getItemOrNull('vendingMachine');
    const randomAmount = makeRandomAmount(parseInt(chargeInput.value));
    if (vendingMachine) {
      vendingMachine.change = parseInt(vendingMachine.change) + parseInt(chargeInput.value);
    } else if (vendingMachine === null) {
      vendingMachine = new VendingMachine(chargeInput.value);
    }
    randomAmount.forEach((v, i) => (vendingMachine.coins[i].quantity += v));
    setAllData('vendingMachine', vendingMachine);
    initDomProperty(chargeAmountValue, chargeInput);
    tableRefresh(table);
  }
};
