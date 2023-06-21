export const loadMenu = () => {
  const main = document.querySelector('main');
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  main.appendChild(menu);

  const heading = document.createElement('h2');
  heading.innerText = 'nosso cardápio';
  menu.appendChild(heading);

  const list = document.createElement('ul');
  menu.appendChild(list);
  const item1 = document.createElement('li');
  item1.innerText = 'vinho 5 &euro';
  const item2 = document.createElement('li');
  item2.innerText = 'migas 5 &euro';
  const item3 = document.createElement('li');
  item3.innerText = 'caldeirada 20 &euro';
  const item4 = document.createElement('li');
  item4.innerText = 'bacalhau 20 &euro';
  const item5 = document.createElement('li');
  item5.innerText = 'bola de mel 10 &euro';
  const item6 = document.createElement('li');
  item6.innerText = 'chocolate 5 &euro';
  menu.appendChild(item1);
  menu.appendChild(item2);
  menu.appendChild(item3);
  menu.appendChild(item4);
  menu.appendChild(item5);
  menu.appendChild(item6);
};
