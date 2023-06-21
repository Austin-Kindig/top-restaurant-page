import { loadHome } from './initial';
import './style.css';
import { loadMenu } from './menu';
// import { loadAbout } from './about-us';
// import { loadPartners } from './partners';
import { clearPage } from './clear';

loadHome();

document.addEventListener('DOMContentLoaded', () => {
  const menuTab = document.getElementById('menu');
  const aboutTab = document.getElementById('about');
  const partnersTab = document.getElementById('partners');

  // event listeners for tab functionality
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
});
