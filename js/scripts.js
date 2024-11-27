const containerElement = document.getElementById('container');

const products = [
  {
    id: 'product-waffle',
    name: 'Waffle with Berries',
    price: 6.5,
    quantity: 0,
  },
  {
    id: 'product-creme',
    name: 'Vanilla Bean Crème Brûlée',
    price: 7.0,
    quantity: 0,
  },
];

let productsCart = [];

const addToCart = (name, price) => {
  productsCart.push({ name: name, price: price, quantity: 1 });
};

const removeProductFromCart = (name, element) => {
  productsCart = productsCart.filter((product) => product.name !== name);
  element.parentElement.nextElementSibling.classList.remove('element-disable');
};

const incrementProductQuantity = (name, element) => {
  const productSelected = productsCart.find((product) => product.name === name);
  productSelected.quantity++;
  console.log(productsCart);
  element.textContent = productSelected.quantity;
};

const decrementProductQuantity = (name, element) => {
  const productSelected = productsCart.find((product) => product.name === name);
  if (productSelected.quantity === 1) {
    removeProductFromCart(name, element);
  } else {
    productSelected.quantity--;
    element.textContent = productSelected.quantity;
  }
  console.log(productSelected.quantity);
};

const manageCart = (event) => {
  const type = event.target.dataset.type;
  const name = event.target.dataset.name;
  const price = event.target.dataset.price;

  if (!type) {
    return;
  }

  if (type === 'add') {
    event.target.classList.add('element-disable');
    addToCart(name, price);
  }

  if (type === 'increment') {
    incrementProductQuantity(name, event.target.previousElementSibling);
  }

  if (type === 'substract') {
    decrementProductQuantity(name, event.target.nextElementSibling);
  }
};

containerElement.addEventListener('click', manageCart);
