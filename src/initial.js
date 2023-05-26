const loadHome = () => {
  const foundation = document.getElementById('content');

  // header setup
  const header = document.createElement('header');
  foundation.appendChild(header);
  const logo = document.createElement('div');
  header.appendChild(logo);
  logo.setAttribute('id', 'logo');
  const logoImage = document.createElement('img');
  logo.appendChild(logoImage);
  logoImage.setAttribute('src', './O.png');
  logoImage.setAttribute('alt', 'O');
  const logoText = document.createElement('h1');
  logo.appendChild(logoText);
  logoText.innerText = 'Restuarante';

  // main setup
  const main = document.createElement('main');
  foundation.appendChild(main);
  const background = document.createElement('img');
  background.setAttribute('src', 'https://images.unsplash.com/photo-1603657289433-e4983d2114b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80');
  background.setAttribute('alt', 'beautiful vinyard');
  main.appendChild(background);

  // footer setup
  const footer = document.createElement('footer');
  foundation.appendChild(footer);
  const copyright = document.createElement('p');
  copyright.innerText = 'Austin Kindig 2023 &copy';
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
