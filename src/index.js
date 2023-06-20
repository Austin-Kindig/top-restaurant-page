import { loadHome } from './initial';
import './style.css';
import { loadMenu } from './menu';
import { loadAbout } from './about-us';
import { loadPartners } from './partners';
import { clearPage } from './clear';

const menuTab = document.getElementById('menu');
const aboutTab = document.getElementById('about');
const partnersTab = document.getElementById('partners');

loadHome();

menuTab.addEventListener('click', () => {
  clearPage();
  loadMenu();
});

aboutTab.addEventListener('click', () => {
  clearPage();
  loadAbout();
});

partnersTab.addEventListener('click', () => {
  clearPage();
  loadPartners();
});
