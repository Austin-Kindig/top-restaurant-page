import { loadHome, setupLogoEvent } from './initial';
import './style.css';
import { loadMenu } from './menu';
import { loadAbout } from './about-us';
import { loadPartners } from './partners';
import { clearPage } from './clear';

loadHome();

document.addEventListener('DOMContentLoaded', () => {
  const menuTab = document.getElementById('menu-button');
  const aboutTab = document.getElementById('about-button');
  const partnersTab = document.getElementById('partners-button');

  setupLogoEvent();

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
