import { ALERT_MESSAGE } from '../model/constants.js';

export const $ = id => document.getElementById(id);
export const selectAll = className => document.querySelectorAll(`.${className}`);

export const createElement = ({
  tag,
  id,
  innerHTML,
  className,
  placeholder,
  type,
  src,
  name,
  border,
}) => {
  const htmlTag = document.createElement(tag);
  if (id) htmlTag.id = id;
  if (innerHTML) htmlTag.innerHTML = innerHTML;
  if (className) htmlTag.classList = className;
  if (placeholder) htmlTag.placeholder = placeholder;
  if (type) htmlTag.type = type;
  if (src) htmlTag.src = src;
  if (name) htmlTag.name = name;
  if (border) htmlTag.border = border;
  if (tag === 'table') {
    htmlTag.style.borderCollapse = 'collapse';
  }

  return htmlTag;
};

export const appendChilds = (parent, childs) => childs.forEach(child => parent.appendChild(child));

export const getItemOrEmptyArray = key => JSON.parse(localStorage.getItem(key)) || [];

export const getItemOrNull = key => JSON.parse(localStorage.getItem(key));

export const setAllData = (key, allData) => localStorage.setItem(key, JSON.stringify(allData));

export const isBlankExist = (placeholder, input) => {
  const isIncludeBlank = input === '' || input.includes(' ');
  if (isIncludeBlank) {
    alert(`${placeholder}에 ${ALERT_MESSAGE.isBlank}`);
  }

  return isIncludeBlank;
};

export const isPositiveNumber = (placeholder, input) => {
  const isPositive = parseInt(input, 10) > 0;
  if (!isPositive) {
    alert(`${placeholder}에 ${ALERT_MESSAGE.isNotPositiveNumber}`);
  }

  return isPositive;
};

export const isInputNumberValid = (placeholder, input) =>
  !isBlankExist(placeholder, input) && isPositiveNumber(placeholder, input);

export const isMultipleOf10 = (placeholder, input) => {
  const isMultiple = parseInt(input, 10) % 10 === 0;
  if (!isMultiple) {
    alert(`${placeholder}에 ${ALERT_MESSAGE.isNotMultipleOf10}`);
  }

  return isMultiple;
};

export const onKeyUpNumericEvent = input => (input.value = input.value.replace(/[^0-9]/g, ''));
