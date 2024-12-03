const containerElement = document.getElementById('container');
const cardproductsElement = document.getElementById('cartproducts')
const imageCarElement = document.getElementById('container-cart')

let productsCarts = [];

const updateProductCart = () =>{
  const fragment = document.createDocumentFragment();

  if(productsCarts.length===0){
    cardproductsElement.textContent=''
    imageCarElement.classList.remove('element-disable')
  }else{
    imageCarElement.classList.add('element-disable')
  }

  productsCarts.map((productCart)=>{
    const nameProduct = document.createElement('p')
    nameProduct.classList.add('textCardElement')
    nameProduct.textContent = productCart.name

    const divProduct = document.createElement('div')
    divProduct.classList.add('cartproducts')

    const nameQuantity = document.createElement('p')
    nameQuantity.textContent = `${productCart.quantity}x `
    nameQuantity.classList.add('quantityProduct')

    const namepriceProduct = document.createElement('p')
    namepriceProduct.textContent = `@ $${productCart.price}`
    namepriceProduct.classList.add('priceProduct')

    const namepriceQuantity = document.createElement('p')
    namepriceQuantity.textContent = `$${(productCart.quantity * productCart.price).toFixed(2)}`
    namepriceQuantity.classList.add('priceQuantity')

    cardproductsElement.textContent=''

    divProduct.append(nameQuantity)
    divProduct.append(namepriceProduct)
    divProduct.append(namepriceQuantity)

    fragment.append(nameProduct)
    fragment.append(divProduct)
  })
  
  cardproductsElement.append(fragment)


//ponerlos por debajo
}

const addToCart = (name, price) => {
  productsCarts.push({ name: name, price: price, quantity: 1 });
};

const removeProductFromCart = (name, element) => {
  productsCarts = productsCarts.filter((product) => product.name !== name);
  element.parentElement.nextElementSibling.classList.remove('element-disable');

};

const incrementProductQuantity = (name, element) => {
  const productSelected = productsCarts.find((product) => product.name === name);
  productSelected.quantity++;
  console.log(productsCarts);
  element.textContent = productSelected.quantity;
};

const decrementProductQuantity = (name, element) => {
  const productSelected = productsCarts.find((product) => product.name === name);
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
  updateProductCart()
};



containerElement.addEventListener('click', manageCart);
