// write a function to remove the body content
const clearPage = () => {
  const main = document.querySelector('main');
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
};
export { clearPage };
