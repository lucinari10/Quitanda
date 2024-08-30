const productSelect = document.getElementById('product-select');
const quantityInput = document.getElementById('quantity');
const addToCartButton = document.getElementById('add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

let totalPrice = 0;

addToCartButton.addEventListener('click', () => {
    const selectedProduct = productSelect.options[productSelect.selectedIndex];
    const productName = selectedProduct.text.split(' - ')[0];
    const productPrice = parseFloat(selectedProduct.value);
    const quantity = parseInt(quantityInput.value);

    // Adiciona o produto ao carrinho
    const cartItem = document.createElement('li');
    cartItem.textContent = `${quantity} x ${productName} - R$ ${(productPrice * quantity).toFixed(2)}`;
    cartItems.appendChild(cartItem);

    // Atualiza o total
    totalPrice += productPrice * quantity;
    totalPriceElement.textContent = totalPrice.toFixed(2);
});
