import vinyard from './vinyard.jpg';

export const loadMain = () => {
  const main = document.querySelector('main');
  const background = new Image();
  background.src = vinyard;
  background.setAttribute('id', 'background');
  main.appendChild(background);
};
