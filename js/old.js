const addButton = (event) => {
  const productElement = event.currentTarget.getAttribute('data-id');
  console.log(productElement);
  addElement.classList.add('element-disable');
  increment();
};

const increment = () => {
  const item = products.find((product) => {
    return product.id === 'product-waffle';
  });
  item.quantity++;
  numberElement.textContent = item.quantity;
};

const decrement = () => {
  const item = products.find((product) => {
    return product.id === 'product-waffle';
  });
  item.quantity--;
  numberElement.textContent = item.quantity;

  if (item.quantity <= 0) {
    return addElement.classList.remove('element-disable');
  }
};

incrementElement.addEventListener('click', increment);
decrementElement.addEventListener('click', decrement);

const arrayCartElements = document.querySelectorAll('.add-cart');
// querySelectorAll: devuelve  array de elementos que contengan la clase solicitada, en este caso '.add-cart

arrayCartElements.forEach((cartButton) => {
  cartButton.addEventListener('click', addButton);
});
