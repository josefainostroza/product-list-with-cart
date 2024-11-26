const addElement = document.getElementById('add-cart');
const decrementElement = document.getElementById('icon-decrement');
const incrementElement = document.getElementById('icon-increment');
const numberElement = document.getElementById('add-remove');

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
    name: 'creme',
    price: 6.5,
    quantity: 0,
  },
];

const addButton = (e) => {
  const idProduct = e.target.dataset.id;
  const typeProduct = e.target.dataset.type;

  if (idProduct === 'product-waffle') {
    addElement.classList.add('element-disable');
  }

  if (typeProduct === 'add') {
    if (idProduct === 'product-waffle') {
      increment();
    }
  }

  if (typeProduct === 'substract') {
    if (idProduct === 'product-waffle') {
      decrement();
    }
  }
};

const increment = () => {
  const item = products.find((product) => {
    return product.id === 'product-creme';
  });
  item.quantity++;
  numberElement.textContent = item.quantity;
  console.log(item);
};

const decrement = () => {
  const item = products.find((product) => {
    return product.id === 'product-creme';
  });
  item.quantity--;
  numberElement.textContent = item.quantity;
  console.log(item);
  if (item.quantity <= 0) {
    return addElement.classList.remove('element-disable');
  }
};

containerElement.addEventListener('click', addButton);

// incrementElement.addEventListener('click', increment);
// decrementElement.addEventListener('click', decrement);
