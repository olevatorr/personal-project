window.addEventListener('load', function (){
    const savedCartItems = localStorage.getItem('cartItems');

    if (savedCartItems) {
        cartItems = JSON.parse(savedCartItems);
    }

    updateShoppingCart();

    productList.filter( item => cartItems.some( cartItem => cartItem.id === item.id )).forEach( item => {
        const index = cartItems.findIndex( cartItem => cartItem.id === item.id );
        cartItems[index].img = item.img;
        cartItems[index].tag = item.tag;
    });
    console.log(cartItems);
})


function updateShoppingCart() {
    const cartList = document.querySelector('.cartlist');
    cartList.innerHTML = '';
    let total = 0;

    cartItems.forEach((item) => {
        cartList.innerHTML += `
            <li class="cart_item">
                <div class="item_pic">
                    <img src="${item.img}" alt="">
                </div>
                <div class="item_info">
                    <span class="itemName">${item.name}</span>
                    <span>規格: <span class="tags">${item.tag}</span></span>
                    <span class="itemPrice">NT$ ${item.price}</span>
                </div>
                <div class="item_qty">
                    數量:
                    <div class="qty">
                        ${item.qty}
                    </div>
                </div>
                <div class="item_price">
                    NT$ ${item.price * item.qty}
                </div>
                <i class="fa-regular fa-circle-xmark"></i>
            </li>
        `;
        total += item.price * item.qty;
    });
    document.querySelector('#totalQty').textContent = cartItems.length;
    document.querySelector('#totalAmount').textContent = total;
}

