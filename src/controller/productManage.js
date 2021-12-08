import { tableTemplate, makeTableHeader } from './template.js';
import { appendChilds, createElement, getAllData, setAllData } from './utils.js';
import Product from '../model/product.js';
import { MENU } from '../model/constants.js';

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
  const allProducts = getAllData('products');
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

export const addProduct = (table, productInputs) => {
  const allProducts = getAllData('products');
  const productObject = new Product(
    productInputs[0].value,
    parseInt(productInputs[1].value, 10),
    parseInt(productInputs[2].value, 10),
  );
  allProducts.push(productObject);
  setAllData(allProducts, 'products');
  tableRefresh(table);
};
