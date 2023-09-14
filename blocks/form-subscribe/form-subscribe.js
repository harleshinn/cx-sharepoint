/**
 * decorates the form block
 * @param {Element} block The form block element
 */
export default async function decorate(block) {
  console.log('arrived!');
  const marketoForm = `<form id="mktoForm_1002"></form>`;
  const formContainer =  document.querySelector('.form-subscribe-wrapper div > div:nth-child(3)');
  formContainer.innerHTML = marketoForm;
}

