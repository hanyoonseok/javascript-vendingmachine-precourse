import { tableTemplate, makeTableHeader } from './template.js';
import {
  $,
  selectAll,
  createElement,
  appendChilds,
  getItemOrEmptyArray,
  getItemOrNull,
  setAllData,
} from './utils.js';
import { COIN_ARRAY, MENU } from '../model/constants.js';

const setChargeInput = chargeInput => localStorage.setItem('chargeInput', chargeInput);

const makeProductName = (product, menu) => {
  const productName = createElement({
    tag: 'td',
    innerHTML: product.name,
    className: menu.purchaseNameClass,
  });
  productName.dataset.productName = product.name;

  return productName;
};

const makeProductPrice = (product, menu) => {
  const productPrice = createElement({
    tag: 'td',
    innerHTML: product.price,
    className: menu.purchasePriceClass,
  });
  productPrice.dataset.productPrice = product.price;

  return productPrice;
};

const makeProductQuantity = (product, menu) => {
  const productQuantity = createElement({
    tag: 'td',
    innerHTML: product.quantity,
    className: menu.purchaseQuantityClass,
  });
  productQuantity.dataset.productQuantity = product.quantity;

  return productQuantity;
};

const makePurchaseButton = (product, menu) => {
  const productPurchaseButton = createElement({
    tag: 'button',
    innerHTML: menu.purchaseButton,
    className: menu.purchaseButtonClass,
  });
  productPurchaseButton.dataset.productName = product.name;

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

const refreshProductStatusTable = table => {
  const menu = MENU('productPurchase');
  const tableHeader = makeTableHeader(menu);
  const tableRows = makeProductStatusTableRows(menu);
  $(menu.chargeAmountId).innerHTML = getItemOrNull('chargeInput');
  table.innerHTML = '';
  appendChilds(table, tableHeader);
  appendChilds(table, tableRows);
  setAllPurchaseButtonEvent();
};

const purchaseProduct = button => {
  const allProducts = getItemOrNull('products');
  let chargeInput = getItemOrNull('chargeInput');
  const selectedProduct = allProducts.find(e => e.name === button.dataset.productName);
  selectedProduct.quantity -= 1;
  chargeInput -= selectedProduct.price;
  setChargeInput(chargeInput);
  setAllData('products', allProducts);

  const table = button.parentNode.parentElement;
  refreshProductStatusTable(table);
};

export const setAllPurchaseButtonEvent = () => {
  const allPurchaseButton = selectAll('purchase-button');
  allPurchaseButton.forEach(button =>
    button.addEventListener('click', () => purchaseProduct(button)),
  );
};

export const makeProductStatusTable = menu => {
  const table = tableTemplate(menu);
  const tableRows = makeProductStatusTableRows(menu);
  appendChilds(table, tableRows);

  return table;
};

const makeReturnTableEmptyRows = () => {
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

export const makeReturnTable = menu => {
  const table = tableTemplate(menu);
  const tableRows = makeReturnTableEmptyRows();
  appendChilds(table, tableRows);

  return table;
};

const getCount = x => {
  let chargeInput = getItemOrNull('chargeInput');
  const count = {
    coin: x.coin,
    quantity: 0,
  };
  let div = chargeInput / x.coin;
  if (div > x.quantity) {
    div = x.quantity;
  }
  chargeInput -= x.coin * div;
  x.quantity -= div;
  setChargeInput(chargeInput);
  count.quantity = div;

  return count;
};

const makeMinimumCoin = () => {
  const vendingMachine = getItemOrNull('vendingMachine');
  const minimumCoin = vendingMachine.coins.map(x => getCount(x));
  minimumCoin.forEach(minimum => (vendingMachine.change -= minimum.coin * minimum.quantity));
  setAllData('vendingMachine', vendingMachine);

  return minimumCoin;
};

const makeReturnTableRow = minimunCoinArray =>
  minimunCoinArray.map(row => {
    const trTag = createElement({ tag: 'tr' });
    const coin = createElement({ tag: 'td', innerHTML: `${row.coin}원` });
    const quantity = createElement({
      tag: 'td',
      innerHTML: `${row.quantity}개`,
    });
    appendChilds(trTag, [coin, quantity]);

    return trTag;
  });

const refreshReturnTable = (returnTable, minimunCoinArray) => {
  const menu = MENU('return');
  const purchaseMenu = MENU('productPurchase')
  const tableHeader = makeTableHeader(menu);
  const tableRows = makeReturnTableRow(minimunCoinArray);
  returnTable.innerHTML = '';
  $(purchaseMenu.chargeAmountId).innerHTML = getItemOrNull('chargeInput');
  appendChilds(returnTable, tableHeader);
  appendChilds(returnTable, tableRows);
};

export const returnChanges = returnTable => {
  const minimunCoinArray = makeMinimumCoin();
  refreshReturnTable(returnTable, minimunCoinArray);
};

const initDomProperty = (chargeInputDom, chargeAmountValue) => {
  chargeInputDom.value = '';
  chargeAmountValue.innerHTML = getItemOrNull('chargeInput');
};

export const addChargeInput = (chargeInputDom, chargeAmountValue) => {
  // 유효성 검사 필요
  let chargeInput = getItemOrNull('chargeInput');
  if (chargeInput) {
    chargeInput += parseInt(chargeInputDom.value);
  } else if (chargeInput === null) {
    chargeInput = parseInt(chargeInputDom.value);
  }
  setChargeInput(chargeInput);
  initDomProperty(chargeInputDom, chargeAmountValue);
};
