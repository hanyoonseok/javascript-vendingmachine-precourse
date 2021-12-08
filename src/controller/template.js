import { createElement, appendChilds } from './utils.js';

export const makeTableHeader = menu =>
  menu.tableHeader.map(x => createElement({ tag: 'th', innerHTML: x }));

export const tableTemplate = menu => {
  const tableContainer = createElement({ tag: 'table', border: 1 });
  const tableHeader = makeTableHeader(menu);
  appendChilds(tableContainer, tableHeader);

  return tableContainer;
};
