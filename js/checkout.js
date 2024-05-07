window.addEventListener('load', function (){
    window.addEventListener('scroll', () => {
        aosNav();
    })

    const savedCartItems = localStorage.getItem('cartItems');

    if (savedCartItems) {
        cartItems = JSON.parse(savedCartItems);
    }

    productList.filter( item => cartItems.some( cartItem => cartItem.itemName === item.itemName )).forEach( item => {
        const index = cartItems.findIndex( cartItem => cartItem.itemName === item.itemName );
        cartItems[index].img = item.img;
        cartItems[index].tag = item.tag;
    });
    updateShoppingCart();

    // 因用removeBtn的click事件會在removeBtn元素被刪除後無法觸發，故改用cartList的click事件
    const cartList = document.querySelector('.cartlist');
    cartList.addEventListener('click', (event) => {
        if (event.target.classList.contains('removeBtn')) {
            const listItem = event.target.closest('.cart_item');
            const itemName = listItem.querySelector('.itemName').textContent;
            const index = cartItems.findIndex(item => item.itemName === itemName);
            if (index !== -1) {
                cartItems.splice(index, 1);
                updateShoppingCart();
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            }
        }
    });
    console.log(totalAmount);
    const enterDiscount = document.querySelector('#enterDiscount');
    enterDiscount.addEventListener('change', calcDiscount);

    document.querySelector('#closePopup').addEventListener('click', function() {
        document.querySelector('#Popup').style.display = 'none';
    });

})

let oriAmount;

function updateShoppingCart() {
    const cartList = document.querySelector('.cartlist');
    cartList.innerHTML = '';
    let total = 0;

    cartItems.forEach((item) => {
        let itemAmount = item.itemPrice * item.quantity;
        itemAmount = itemAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        cartList.innerHTML += `
            <li class="cart_item">
                <div class="item_pic">
                    <img src="${item.img}" alt="${item.itemName}">
                </div>
                <div class="item_info">
                    <span class="itemName">${item.itemName}</span>
                    <span>功能: <span class="tags">${item.tag}</span></span>
                    <span class="itemPrice">NT$ ${item.itemPrice}</span>
                </div>
                <div class="item_qty">
                    數量:
                    <div class="qty">
                        ${item.quantity}
                    </div>
                </div>
                <div class="item_price">
                    NT$ ${itemAmount}
                </div>
                <i class="removeBtn fa-regular fa-circle-xmark"></i>
            </li>
        `;
        total += item.itemPrice * item.quantity;
        oriAmount = total;
    });
    document.querySelector('#totalQty').textContent = cartItems.length;
    document.querySelector('#totalAmount').textContent = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

couponList = [
    {
        code: '123456',
        discount: 0.9,
        name: '新會員優九折惠碼',
    },
    {
        code: '654321',
        discount: 0.8,
        name: '八折優惠',
    },
];

function calcDiscount() {
    const discountCode = document.querySelector('#enterDiscount').value;
    const totalAmount = parseFloat(document.querySelector('#totalAmount').textContent.replace(/,/g, ''));
    let discountAmount = 0;
    let finalAmount = totalAmount;

    const coupon = couponList.find(coupon => coupon.code === discountCode);
    if (coupon) {
        discountAmount = totalAmount * (1 - coupon.discount);
        discountAmount = discountAmount.toFixed(0);
        finalAmount = totalAmount - discountAmount;
        finalAmount = finalAmount.toFixed(0);
        document.querySelector('.popup-content .fa-regular').classList.add('fa-circle-check');
        document.querySelector('.popup-content .fa-regular').classList.remove('fa-circle-xmark');
        document.querySelector('#Text').textContent = coupon.name + '已套用';
    } else {
        document.querySelector('#Popup').style.display = 'block';
        document.querySelector('#Text').textContent = '無效的折扣碼';
        document.querySelector('#enterDiscount').value = '';
        finalAmount = oriAmount;
        console.log(finalAmount, totalAmount);
        document.querySelector('.popup-content .fa-regular').classList.remove('fa-circle-check');
        document.querySelector('.popup-content .fa-regular').classList.add('fa-circle-xmark');
    }

    document.querySelector('#discountAmount').textContent = discountAmount.toLocaleString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.querySelector('#totalAmount').textContent = finalAmount.toLocaleString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.querySelector('#Popup').style.display = 'block';
}


function aosNav() {
    let navBar = document.getElementById("nav_bar");
    if (window.scrollY === 0) {
        navBar.style.backgroundColor = "rgba(0,0,0,0)";
    } else {
        navBar.style.backgroundColor = "#fff";
    }
};