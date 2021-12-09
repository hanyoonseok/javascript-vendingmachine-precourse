import { createElement, $, appendChilds } from '../controller/utils.js';
import { makeProductManageTable, addProduct } from '../controller/productManage.js';
import { MENU } from '../model/constants.js';

const createProductNameInput = menu =>
  createElement({ tag: 'input', type: 'text', placeholder: '상품명', id: menu.nameInputId });

const createProductPriceInput = menu => {
  const productPriceInput = createElement({
    tag: 'input',
    type: 'number',
    placeholder: '가격',
    id: menu.priceInputId,
  });
  productPriceInput.addEventListener('keyup', () => {
    productPriceInput.value = productPriceInput.value.replace(/[^0-9]/g, '');
  });

  return productPriceInput;
};

const createProductQuantityInput = menu => {
  const productQuantityInput = createElement({
    tag: 'input',
    type: 'number',
    placeholder: '수량',
    id: menu.quantityInputId,
  });
  productQuantityInput.addEventListener('keyup', () => {
    productQuantityInput.value = productQuantityInput.value.replace(/[^0-9]/g, '');
  });

  return productQuantityInput;
};

const createProductAddButton = (table, menu, productInputs) => {
  const addButton = createElement({
    tag: 'button',
    innerHTML: menu.AddButton,
    id: menu.AddButtonId,
  });
  addButton.addEventListener('click', () =>
    addProduct(table, productInputs[0], productInputs[1], productInputs[2]),
  );

  return addButton;
};

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
  const productStatusTitle = createElement({ tag: 'p', innerHTML: menu.StatusTitle });
  const table = makeProductManageTable(menu);
  const productAddButton = createProductAddButton(table, menu, productInputs);
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
