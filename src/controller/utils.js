export const $ = id => document.getElementById(id);
export const $class = className => document.querySelectorAll(`.${className}`);

export const createElement = ({ tag, id, innerHTML, className, placeholder, type, src, name }) => {
  const htmlTag = document.createElement(tag);
  if (id) htmlTag.id = id;
  if (innerHTML) htmlTag.innerHTML = innerHTML;
  if (className) htmlTag.classList = className;
  if (placeholder) htmlTag.placeholder = placeholder;
  if (type) htmlTag.type = type;
  if (src) htmlTag.src = src;
  if (name) htmlTag.name = name;

  return htmlTag;
};

export const appendChilds = (parent, childs) => childs.forEach(child => parent.appendChild(child));
