import faker from 'faker';

const cartMount = (el) => {
  const cartText = `<div>You have ${faker.datatype.number()} items in your cart </div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart')
  if (el) {
    cartMount(el)
  }
}

export {cartMount};