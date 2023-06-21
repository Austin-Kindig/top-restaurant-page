export const loadPartners = () => {
  const main = document.querySelector('main');
  const partners = document.createElement('div');
  partners.setAttribute('id', 'about-partners');
  main.appendChild(partners);

  const heading = document.createElement('h2');
  heading.innerText = 'parceiros';
  partners.appendChild(heading);

  const content = document.createElement('p');
  content.innerText = 'Valorizamos imensamente as nossas parcerias com agricultores e vinicultores locais, que desempenham um papel fundamental na qualidade dos nossos produtos. Trabalhamos em estreita colaboração com esses dedicados profissionais que compartilham a nossa paixão pela excelência e sustentabilidade. Os nossos parceiros fornecem-nos cuidadosamente selecionados ingredientes frescos, desde as sazonais frutas e vegetais orgânicos até às especiarias aromáticas que realçam os sabores dos nossos pratos. Além disso, trabalhamos com vinicultores locais que nos fornecem uvas de primeira qualidade, essenciais para a produção dos nossos vinhos distintos. Essas parcerias fortalecem a nossa ligação à terra e à comunidade, permitindo-nos oferecer aos nossos clientes uma experiência gastronómica autêntica e única. Estamos gratos pela colaboração e pelo apoio contínuo dos nossos estimados parceiros.';
  partners.appendChild(content);
};
