import { tableTemplate, makeTableHeader } from './template.js';
import {
  appendChilds,
  createElement,
  getItemOrEmptyArray,
  setAllData,
  isBlankExist,
  isInputNumberValid,
  isMultipleOf10,
} from './utils.js';
import Product from '../model/product.js';
import { MENU, ALERT_MESSAGE } from '../model/constants.js';

const makeProductName = (product, menu) =>
  createElement({
    tag: 'td',
    innerHTML: product.name,
    class: menu.manageItemNameClass,
  });

const makeProductPrice = (product, menu) =>
  createElement({
    tag: 'td',
    innerHTML: product.price,
    class: menu.manageItemPriceClass,
  });

const makeProductQuantity = (product, menu) =>
  createElement({
    tag: 'td',
    innerHTML: product.quantity,
    class: menu.manageItemQuantityClass,
  });

const makeTableRows = menu => {
  const allProducts = getItemOrEmptyArray('products');
  const tableRows = allProducts.map(product => {
    const trTag = createElement({ tag: 'tr', className: menu.manageItemClass });
    const productName = makeProductName(product, menu);
    const productPrice = makeProductPrice(product, menu);
    const productQuantity = makeProductQuantity(product, menu);
    appendChilds(trTag, [productName, productPrice, productQuantity]);

    return trTag;
  });

  return tableRows;
};

export const makeProductManageTable = menu => {
  const table = tableTemplate(menu);
  const tableRows = makeTableRows(menu);
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

const isProductPriceValid = (placeholder, input) =>
  isInputNumberValid(placeholder, input) && isMultipleOf10(placeholder, input);

const isAlreadyExistProduct = (placeholder, input) => {
  const allProducts = getItemOrEmptyArray('products');
  const isExist = allProducts.find(e => e.name === input);
  if (isExist) {
    alert(ALERT_MESSAGE.isAlreadyExistProduct);
  }

  return isExist;
};

const isProductNameValid = (placeholder, input) =>
  !isBlankExist(placeholder, input) && !isAlreadyExistProduct(placeholder, input);

const isProductInputsValid = (productNameInput, productPriceInput, productQuantityInput) =>
  isProductNameValid(productNameInput.placeholder, productNameInput.value) &&
  isProductPriceValid(productPriceInput.placeholder, productPriceInput.value) &&
  isInputNumberValid(productQuantityInput.placeholder, productQuantityInput.value);

const initInputs = (productNameInput, productPriceInput, productQuantityInput) => {
  productNameInput.value = '';
  productPriceInput.value = '';
  productQuantityInput.value = '';
};

export const addProduct = (table, productNameInput, productPriceInput, productQuantityInput) => {
  const allProducts = getItemOrEmptyArray('products');
  if (isProductInputsValid(productNameInput, productPriceInput, productQuantityInput)) {
    const productObject = new Product(
      productNameInput.value,
      parseInt(productPriceInput.value),
      parseInt(productQuantityInput.value),
    );
    allProducts.push(productObject);
    setAllData('products', allProducts);
    tableRefresh(table);
    initInputs(productNameInput, productPriceInput, productQuantityInput);
  }
};
