const tag = (name, ...children) => {
  const result = document.createElement(name);
  for (const child of children) {
    if (typeof (child) === 'string') {
      result.appendChild(document.createTextNode(child));
    } else {
      result.appendChild(child);
    }
  }

  result.att = (name, value) => {
    result.setAttribute(name, value);
    return result;
  };

  result.onclick$ = (callback) => {
    result.onclick = callback;
    return result;
  };

  result.listen = (event, callback) => {
    result.addEventListener(event, callback)
    return result;
  }

  result.id$ = (name) => {
    result.id = name;
    return result;
  }

  result.class = (className) => {
    result.className = className;
    return result;
  }


  return result;
}

const basicTag = (t) => (...children) => tag(t, ...children);

const div = basicTag('div');
const span = basicTag('span');
const p = basicTag('p');
const h1 = basicTag('h1');
const h2 = basicTag('h2');
const h3 = basicTag('h3');
const h4 = basicTag('h4');
const h5 = basicTag('h5');
const img = (src) => tag('img').att('src', src);
const input = (type) => tag('input').att('type', type);
const select = basicTag('select');
const label = (f, text) => tag('label', text).att('for', f);
const option = ({ text, value }) => tag('option', text).att('value', value ?? text).att('title', text);

export { tag, img, input, div, span, p, h1, h2, h3, h4, h5, option }
