import { createElement, appendChilds, setAllData } from './utils.js';
import { tableTemplate, makeTableHeader } from './template.js';
import { MENU } from '../model/constants.js';
import VendingMachine from '../model/vendingMachine.js';

const getVendingMachine = () => JSON.parse(localStorage.getItem('vendingMachine'));

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
  const coinArray = [500, 100, 50, 10];
  const emptyRows = coinArray.map(won => {
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
  const vendingMachine = getVendingMachine();
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
  const array = [500, 100, 50, 10];
  const amountArray = array.map(coin => {
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

export const chargeCoin = (table, input, chargeAmountValue) => {
  const vendingMachine = getVendingMachine();
  const randomAmount = makeRandomAmount(parseInt(input.value, 10));
  if (vendingMachine) {
    randomAmount.forEach((v, i) => (vendingMachine.coins[i].quantity += v));
    vendingMachine.change = parseInt(vendingMachine.change, 10) + parseInt(input.value, 10);
    setAllData('vendingMachine', vendingMachine);
  } else if (vendingMachine === null) {
    const newMachine = new VendingMachine(input.value);
    randomAmount.forEach((v, i) => (newMachine.coins[i].quantity += v));
    setAllData('vendingMachine', newMachine);
  }
  chargeAmountValue.innerHTML = getVendingMachine().change;
  input.value = '';
  tableRefresh(table);
};
