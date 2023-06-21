import O from './O.png';
import vinyard from './vinyard.jpg';

const loadHome = () => {
  const foundation = document.getElementById('content');

  // header setup
  const header = document.createElement('header');
  foundation.appendChild(header);
  const logo = document.createElement('div');
  header.appendChild(logo);
  logo.setAttribute('id', 'logo');
  const logoImage = new Image();
  logoImage.src = O;
  logo.appendChild(logoImage);
  const logoText = document.createElement('h1');
  logo.appendChild(logoText);
  logoText.innerText = 'Restuarante';

  // tabs section setup
  const tabsSection = document.createElement('div');
  tabsSection.setAttribute('id', 'tabs');
  foundation.appendChild(tabsSection);
  const menuTab = document.createElement('button');
  menuTab.innerText = 'cardápio';
  menuTab.setAttribute('class', 'tab');
  menuTab.setAttribute('id', 'menu');
  tabsSection.appendChild(menuTab);
  const aboutTab = document.createElement('button');
  aboutTab.innerText = 'sobre nós';
  aboutTab.setAttribute('class', 'tab');
  aboutTab.setAttribute('id', 'about');
  tabsSection.appendChild(aboutTab);
  const partnersTab = document.createElement('button');
  partnersTab.innerText = 'parceiros';
  partnersTab.setAttribute('class', 'tab');
  partnersTab.setAttribute('id', 'partners');
  tabsSection.appendChild(partnersTab);

  // main setup
  const main = document.createElement('main');
  foundation.appendChild(main);
  const background = new Image();
  background.src = vinyard;
  background.setAttribute('id', 'background');
  main.appendChild(background);

  // footer setup
  const footer = document.createElement('footer');
  foundation.appendChild(footer);
  const copyright = document.createElement('p');
  copyright.innerHTML = 'Austin Kindig 2023 &copy';
  copyright.setAttribute('id', 'copyright');
  footer.appendChild(copyright);
  const hours = document.createElement('div');
  hours.setAttribute('id', 'hours');
  footer.appendChild(hours);
  const hoursList = document.createElement('ul');
  hours.appendChild(hoursList);
  const point1 = document.createElement('li');
  const point2 = document.createElement('li');
  const point3 = document.createElement('li');
  point1.innerText = 'segunda-feira - quinta-feira - 8:00-7:00';
  point2.innerText = 'sexta-feira & sábado - 8:00-10:00';
  point3.innerText = 'domingo - fechado';
  hoursList.appendChild(point1);
  hoursList.appendChild(point2);
  hoursList.appendChild(point3);
  const message = document.createElement('p');
  message.setAttribute('id', 'message');
  message.innerText = 'apoie a comida local';
  footer.appendChild(message);
};

export { loadHome };
