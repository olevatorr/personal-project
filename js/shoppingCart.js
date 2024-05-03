// 購物車陣列
let cartItems = [];

window.addEventListener('load', function () {
    const cartIcon = document.querySelector('#cartIcon');
    const cartContent = document.querySelector('.cart_content');
    const cartQty = document.querySelector('#cartQty');
    // 初始化購物車
    updateCartUI();

    cartIcon.addEventListener('click', function () {
        cartIcon.style.display = 'none';
        cartContent.style.display = 'block';
        cartQty.style.display = 'none';
    });

    const closeCart = document.querySelector('#closeCart');
    closeCart.addEventListener('click', function () {
        cartIcon.style.display = 'block';
        cartContent.style.display = 'none';
        cartQty.style.display = 'flex';
    });

    // 添加產品到購物車
    const addToCartButtons = document.querySelectorAll('.fa-cart-plus');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    for(let i = 0; i<cartQty.clientHeight; i++){
        cartQty[i].onchange = inputQuantity;
    }
});

function addToCart(event) {
    const itemCard = event.target.closest('.item');
    const itemName = itemCard.querySelector('h4').textContent;
    const itemPrice = parseFloat(itemCard.querySelector('.price').textContent.replace('NT$ ', ''));

    // 檢查產品是否已在購物車中
    const existingItemIndex = cartItems.findIndex(item => item.itemName === itemName);

    if (existingItemIndex >= 0) {
        // 如果產品已在購物車中,則增加數量
        cartItems[existingItemIndex].quantity++;
    } else {
        // 否則,將新產品添加到購物車
        cartItems.push({ itemName, itemPrice, quantity: 1 });
    }


    updateCartUI();
}

function formatCurrency(amount) {
    return amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function updateCartUI() {
    const cartQty = document.querySelector('#cartQty');
    const cartItemsList = document.querySelector('.cart_items');
    const totalAmount = document.querySelector('.total_amount');

    // 清空購物車項目列表
    cartItemsList.innerText = '購物車';

    // 重新渲染購物車項目
    let total = 0;
    cartItems.forEach(item => {
        const itemTotal = item.itemPrice * item.quantity;
        total += itemTotal;
        cartItemsList.innerHTML += `
        <li>
            <span>${item.itemName}</span>
            <span>NT$ ${formatCurrency(item.itemPrice)}</span>
            <span>數量:</span>
            <div class="cart_item_qty">
                <i class="fa-solid fa-minus" onclick="decreaseQuantity('${item.itemName}')"></i>
                <input type="number" class="cart_qty" value="${item.quantity}" pattern="\d*"></input>
                <i class="fa-solid fa-plus" onclick="increaseQuantity('${item.itemName}')"></i>
            </div>
            <span class="cart_item_amount">NT$ ${formatCurrency(itemTotal)}</span>
            <i class="fa-regular fa-trash-can" onclick="removeFromCart('${item.itemName}')"></i>
        </li>
        `;
    });

    // 更新購物車數量和總金額
    cartQty.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
    totalAmount.textContent = formatCurrency(total);
}

function increaseQuantity(itemName) {
    const item = cartItems.find(item => item.itemName === itemName);
    if (item) {
        item.quantity++;
        updateCartUI();
    }
}

function decreaseQuantity(itemName) {
    const item = cartItems.find(item => item.itemName === itemName);
    if (item && item.quantity > 1) {
        item.quantity--;
        updateCartUI();
    }
}

function removeFromCart(itemName) {
    const itemIndex = cartItems.findIndex(item => item.itemName === itemName);
    if (itemIndex >= 0) {
        cartItems.splice(itemIndex, 1); // 從購物車陣列中移除該項目
        updateCartUI();
    }
}

function inputQuantity(itemName){
    const item = cartItems.find(item => item.itemName === itemName);
    if (item && item.quantity > 1){
        item.quantity = this.value();
        updateCartUI();
    }
}