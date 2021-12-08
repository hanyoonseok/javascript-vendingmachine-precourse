import { createElement, $, appendChilds } from '../controller/utils.js';
import { makeProductManageTable, addProduct } from '../controller/productManage.js';
import { MENU } from '../model/constants.js';

const createProductNameInput = menu =>
  createElement({ tag: 'input', type: 'text', placeholder: '상품명', id: menu.nameInputId });

const createProductPriceInput = menu =>
  createElement({ tag: 'input', type: 'number', placeholder: '가격', id: menu.priceInputId });

const createProductQuantityInput = menu =>
  createElement({ tag: 'input', type: 'number', placeholder: '수량', id: menu.quantityInputId });

const createProductAddButton = menu =>
  createElement({ tag: 'button', innerHTML: menu.AddButton, id: menu.AddButtonId });

const makeProductInputs = menu => {
  const productNameInput = createProductNameInput(menu);
  const productPriceInput = createProductPriceInput(menu);
  const productQuantityInput = createProductQuantityInput(menu);

  return [productNameInput, productPriceInput, productQuantityInput];
};

const makeViewContents = () => {
  const menu = MENU('productManage');
  const productAddTitle = createElement({ tag: 'p', innerHTML: menu.AddTitle });
  const productInputs = makeProductInputs(menu);
  const productAddButton = createProductAddButton(menu);
  const productStatusTitle = createElement({ tag: 'p', innerHTML: menu.StatusTitle });
  const table = makeProductManageTable(menu);
  productAddButton.addEventListener('click', () => addProduct(table, productInputs));
  const viewContentsArray = [
    productAddTitle,
    ...productInputs,
    productAddButton,
    productStatusTitle,
    table,
  ];

  return viewContentsArray;
};

export const productManageView = () => {
  const $container = $('container');
  const viewContents = makeViewContents();

  appendChilds($container, viewContents);
};
