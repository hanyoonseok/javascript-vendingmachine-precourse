export const $ = id => document.getElementById(id);
export const $class = className => document.querySelectorAll(`.${className}`);

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

export const getAllData = key => JSON.parse(localStorage.getItem(key)) || [];

export const setAllData = (allData, key) => localStorage.setItem(key, JSON.stringify(allData));
