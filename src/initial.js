import O from './O.png';
import { clearPage } from './clear';
import { loadMain } from './main';

const loadHome = () => {
  const foundation = document.getElementById('content');

  // header setup
  const header = document.createElement('header');
  foundation.appendChild(header);
  const logo = document.createElement('div');
  header.appendChild(logo);
  logo.setAttribute('id', 'logo');
  const logoImage = new Image();
  logoImage.setAttribute('id', 'logo-button');
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
  menuTab.innerText = 'Cardápio';
  menuTab.setAttribute('class', 'tab');
  menuTab.setAttribute('id', 'menu-button');
  tabsSection.appendChild(menuTab);
  const aboutTab = document.createElement('button');
  aboutTab.innerText = 'Sobre Nós';
  aboutTab.setAttribute('class', 'tab');
  aboutTab.setAttribute('id', 'about-button');
  tabsSection.appendChild(aboutTab);
  const partnersTab = document.createElement('button');
  partnersTab.innerText = 'Parceiros';
  partnersTab.setAttribute('class', 'tab');
  partnersTab.setAttribute('id', 'partners-button');
  tabsSection.appendChild(partnersTab);

  // main setup
  const main = document.createElement('main');
  foundation.appendChild(main);
  loadMain();

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
  message.innerText = 'Apoie a comida local!';
  footer.appendChild(message);
};

function setupLogoEvent() {
  const logo = document.getElementById('logo-button');
  logo.addEventListener('click', () => {
    clearPage();
    loadMain();
  });
}
export { loadHome, setupLogoEvent };
