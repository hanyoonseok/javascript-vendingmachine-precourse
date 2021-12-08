import { $, createElement, appendChilds } from './utils.js';
import { MENU, MENU_NAME } from '../model/constants.js';
import { showViewByName } from '../view/index.js';

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

  return buttonElements;
};

const initDom = () => {
  const $app = $('app');
  const divTag = createElement({ tag: 'div' });
  const container = createElement({ tag: 'div', id: 'container' });
  const title = createElement({ tag: 'div', innerHTML: '🥤자판기🥤' });
  const buttons = initButtons();

  divTag.appendChild(title);
  appendChilds(divTag, buttons);
  appendChilds($app, [divTag, container]);
  showViewByName(MENU_NAME[0]);
};

export const startVendingMachine = () => {
  initDom();
};
