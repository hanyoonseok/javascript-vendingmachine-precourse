import { makeTableHeader, tableTemplate } from './template.js';
import { createElement, appendChilds, getItemOrEmptyArray, getItemOrNull } from './utils.js';
import { COIN_ARRAY } from '../model/constants.js';

const makeProductName = (product, menu) =>
  createElement({
    tag: 'td',
    innerHTML: product.name,
    className: menu.purchaseNameClass,
  });

const makeProductPrice = (product, menu) =>
  createElement({
    tag: 'td',
    innerHTML: product.price,
    className: menu.purchasePriceClass,
  });

const makeProductQuantity = (product, menu) =>
  createElement({
    tag: 'td',
    innerHTML: product.quantity,
    className: menu.purchaseQuantityClass,
  });

const makePurchaseButton = (product, menu) => {
  const productPurchaseButton = createElement({
    tag: 'button',
    innerHTML: menu.purchaseButton,
    className: menu.purchaseButtonClass,
  });

  return productPurchaseButton;
};

const makeProductStatusTableRows = menu => {
  const allProducts = getItemOrEmptyArray('products');
  const tableRows = allProducts.map(product => {
    const trTag = createElement({ tag: 'tr', className: menu.purchaseItemClass });
    const productName = makeProductName(product, menu);
    const productPrice = makeProductPrice(product, menu);
    const productQuantity = makeProductQuantity(product, menu);
    const purchaseButton = makePurchaseButton(product, menu);
    appendChilds(trTag, [productName, productPrice, productQuantity, purchaseButton]);

    return trTag;
  });

  return tableRows;
};

export const makeProductStatusTable = menu => {
  const table = tableTemplate(menu);
  const tableRows = makeProductStatusTableRows(menu);
  appendChilds(table, tableRows);

  return table;
};

const tableRefresh = table => {
  //   const menu = MENU('productManage');
  //   const tableHeader = makeTableHeader(menu);
  //   const tableRows = makeTableRows(menu);
  //   table.innerHTML = '';
  //   appendChilds(table, tableHeader);
  //   appendChilds(table, tableRows);
};
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

const makeReturnTableRows = () => {
  const vendingMachine = getItemOrNull('vendingMachine');
  let tableRows;
  if (vendingMachine) {
    tableRows = makeVendingMachineRow(vendingMachine);
  } else if (vendingMachine === null) {
    tableRows = makeEmptyRow();
  }

  return tableRows;
};

export const makeReturnTable = menu => {
  const table = tableTemplate(menu);
  const tableRows = makeReturnTableRows();
  appendChilds(table, tableRows);

  return table;
};
