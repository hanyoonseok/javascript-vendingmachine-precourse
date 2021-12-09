import { $, appendChilds } from '../controller/utils.js';
import { productManageView } from './productManage.js';
import changeChargeView from './changeCharge.js';
import productPurchaseView from './productPurchase.js';

export const showViewByName = buttonName => {
  const $container = $('container');
  $container.innerHTML = '';
  if (buttonName === 'productManage') {
    productManageView();
  } else if (buttonName === 'changeCharge') {
    changeChargeView();
  } else if (buttonName === 'productPurchase') {
    productPurchaseView();
  }
};

export const attachButtonsToApp = buttonElements => {
  const $app = $('app');
  appendChilds($app, buttonElements);
};
