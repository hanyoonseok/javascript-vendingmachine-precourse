import { createElement, appendChilds, getAllData } from './utils.js';
import { tableTemplate, makeTableHeader } from './template.js';
import { MENU } from '../model/constants.js';

const makeVendingMachineRow = vendingMachine =>
  vendingMachine.map(row => {
    const trTag = createElement({ tag: 'tr' });
    const coin = createElement({ tag: 'td', innerHTML: `${row.coin}원` });
    const quantity = createElement({
      tag: 'td',
      innerHTML: row.quantity,
      className: `vending-machine-coin-${row.coin}-quantity`,
    });
    appendChilds(trTag, [coin, quantity]);

    return trTag;
  });

const makeEmptyRow = () => {
  const coinArray = [500, 100, 50, 10];

  return coinArray.map(won => {
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
};

const makeTableRows = () => {
  const vendingMachine = localStorage.getItem('vendingMachine');
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
  const menu = MENU('productManage');
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
console.log(amountArray)
  return amountArray;
};

export const chargeCoin = (table, inputValue) => {
  const vendingMachine = localStorage.getItem('vendingMachine');
  const randomAmount = makeRandomAmount(parseInt(inputValue, 10));
};
