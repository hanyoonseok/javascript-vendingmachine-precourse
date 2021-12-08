import { $, createElement, appendChilds } from './utils.js';
import { MENU, MENU_NAME } from '../model/constants.js';
import { showViewByName, attachButtonsToApp } from '../view/index.js';

const createButton = type =>
  createElement({
    tag: 'button',
    name: type.name,
    id: type.menuId,
    innerHTML: type.menu,
  });

const initButtons = () => {
  const buttonElements = MENU_NAME.map(menu => {
    const type = MENU(menu);
    const button = createButton(type);

    return button;
  });
  buttonElements.forEach(button =>
    button.addEventListener('click', () => showViewByName(button.name)),
  );
  attachButtonsToApp(buttonElements);
};

const createTitleImg = () =>
  createElement({
    tag: 'img',
    src: 'https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/beverage_icon.png?raw=true',
  });

const initDom = () => {
  const $app = $('app');
  const divTag = createElement({ tag: 'div' });
  const container = createElement({ tag: 'div', id: 'container' });
  const titleImg = createTitleImg();
  const title = createElement({ tag: 'span', innerHTML: '자판기' });
  appendChilds(divTag, [titleImg, title, titleImg, titleImg]);
  appendChilds($app, [divTag, container]);
};

export const startVendingMachine = () => {
  initDom();
  initButtons();
};
