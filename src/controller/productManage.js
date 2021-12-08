import { tableTemplate, makeTableHeader } from './template.js';
import { appendChilds, getAllData } from './utils.js';

const makeTableRows = menu => {
  const allProducts = getAllData('products');
  const tableRows = [];
  if (allProducts) {
  }

  return tableRows;
};

export const makeProductManageTable = menu => {
  const table = tableTemplate(menu);
  const tableRows = makeTableRows(menu);
  appendChilds(table, tableRows);

  return table;
};
