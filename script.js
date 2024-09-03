const productSelect = document.getElementById('product-select');
const quantityInput = document.getElementById('quantity');
const addToCartButton = document.getElementById('add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const newProductName = document.getElementById('new-product-name');
const newProductPrice = document.getElementById('new-product-price');
const addNewProductButton = document.getElementById('add-new-product');
const showAddProductFormButton = document.getElementById('show-add-product-form');
const addProductForm = document.getElementById('add-product-form');

let totalPrice = 0;

// Função para adicionar um produto ao carrinho
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

// Função para adicionar um novo produto à lista de produtos
addNewProductButton.addEventListener('click', () => {
    const name = newProductName.value.trim();
    const price = parseFloat(newProductPrice.value);

    if (name && !isNaN(price) && price > 0) {
        const newOption = document.createElement('option');
        newOption.value = price.toFixed(2);
        newOption.textContent = `${name} - R$ ${price.toFixed(2)}`;
        productSelect.appendChild(newOption);

        // Limpa os campos de entrada
        newProductName.value = '';
        newProductPrice.value = '';

        // Esconde o formulário após adicionar o produto
        addProductForm.style.display = 'none';
    } else {
        alert('Por favor, insira um nome válido e um preço positivo.');
    }
});

// Função para mostrar/esconder o formulário de adicionar novo produto
showAddProductFormButton.addEventListener('click', () => {
    if (addProductForm.style.display === 'none') {
        addProductForm.style.display = 'block';
    } else {
        addProductForm.style.display = 'none';
    }
});