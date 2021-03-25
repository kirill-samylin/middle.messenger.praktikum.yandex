import Handlebars from 'handlebars';

export function compileTemplate(templateString = '') {
  return Handlebars.compile(templateString);
}

function createElement(obj) {
  console.log(obj)
  const element = document.createElement(obj.tag || 'div');
  for (let key in obj) {
    if (key!=='tag') {
      if (key==='text') {
        element.textContent = obj[key];
      } else if (key==='event') {
        element.addEventListener(obj[key].name, obj[key].fn);
      } else {
        element.setAttribute(key, obj[key]);
      }
    }
  }
  return new Handlebars.SafeString(element.outerHTML);
}

Handlebars.registerHelper('element', function(item) {
  if (!item) return undefined
  return createElement(item)
});

Handlebars.registerHelper('elements', function(items) {
  if (!items) return undefined
  const elements = items.map((item) => createElement(item));
  return elements.join("");
});

Handlebars.registerHelper('stringifyFunc', function(fn) {
  return new Handlebars.SafeString(`(${fn.toString().replace(/\"/g,"'")})()`);
});