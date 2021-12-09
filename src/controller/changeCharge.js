import { createElement, appendChilds, getAllData } from './utils.js';
import { tableTemplate, makeTableHeader } from './template.js';
import { MENU } from '../model/constants.js';

const makeTableRows = menu => {
  const allProducts = getAllData('products');
  const tableRows = allProducts.map(product => {
    const trTag = createElement({ tag: 'tr', className: menu.manageItemClass });

    return trTag;
  });

  return tableRows;
};

export const makeChangeChargeTable = menu => {
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
