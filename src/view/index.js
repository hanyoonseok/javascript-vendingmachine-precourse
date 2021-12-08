import { $, appendChilds } from '../controller/utils.js';
import { productManageView } from './productManage.js';
import chargeChangeView from './chargeChange.js';
import productPurchaseView from './productPurchase.js';

export const showViewByName = buttonName => {
  const $container = $('container');
  $container.innerHTML = '';
  if (buttonName === 'productManage') {
    productManageView();
  } else if (buttonName === 'changeCharge') {
    chargeChangeView();
  } else if (buttonName === 'productPurchase') {
    productPurchaseView();
  }
};

export const attachButtonsToApp = buttonElements => {
  const $app = $('app');
  appendChilds($app, buttonElements);
};
