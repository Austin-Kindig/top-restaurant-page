// write a function to remove the body content
const clearPage = () => {
  const main = document.getElementsByName('main');
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
};
export default { clearPage };
