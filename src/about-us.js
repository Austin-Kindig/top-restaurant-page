export const loadAbout = () => {
  const main = document.querySelector('main');
  const about = document.createElement('div');
  about.setAttribute('id', 'about-us');
  main.appendChild(about);

  const heading = document.createElement('h2');
  heading.innerText = 'sobre nós';
  about.appendChild(heading);

  const content = document.createElement('p');
  content.innerText = 'A nossa vinícola/restaurante é um lugar encantador que combina a tradição vitivinícola com a arte da culinária. Localizada no coração do país, dedicamo-nos apaixonadamente à produção de vinhos de qualidade excecional e à criação de experiências gastronómicas memoráveis. Com uma equipa de enólogos talentosos e chefs especializados, criamos harmoniosas combinações de pratos requintados com os nossos premiados vinhos. A nossa filosofia é baseada na valorização dos produtos locais e na promoção da cultura vinícola, proporcionando aos nossos visitantes uma viagem sensorial única. Além disso, oferecemos visitas guiadas pela vinha, onde podem desfrutar de paisagens deslumbrantes e conhecer o processo de produção de vinhos. Sejam bem-vindos ao nosso espaço acolhedor, onde a tradição e a paixão pelo vinho se encontram!';
  about.appendChild(content);
};
