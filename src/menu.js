export const loadMenu = () => {
  // create a text node to hold the euro currency symbol
  const euroSymbol = document.createTextNode('\u20AC');

  // generate a container for the menu
  const main = document.querySelector('main');
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  main.appendChild(menu);

  // generate a menu heading
  const heading = document.createElement('h2');
  heading.innerText = 'nosso cardápio';
  menu.appendChild(heading);

  // generate a list container
  const list = document.createElement('ul');
  menu.appendChild(list);

  // take a inner-text string and use it to make a menu entry
  const createMenuItem = (text) => {
    const item = document.createElement('li');
    item.innerText = text;
    item.appendChild(euroSymbol.cloneNode(true));
    return item;
  };

  // an array to store the strings used for each entry
  const items = [
    'vinho 5 ',
    'migas 5 ',
    'caldeirada 20 ',
    'bacalhau 20 ',
    'bola de mel 10 ',
    'chocolate 5 ',
  ];

  // iterate over the items array and append the created list items
  items.forEach((text) => {
    const item = createMenuItem(text);
    list.appendChild(item);
  });
};
