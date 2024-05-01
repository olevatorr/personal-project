window.addEventListener('load', function () {
    const shoppingCart = document.querySelector('#shoppingCart');
    const cartIcon = document.querySelector('#cartIcon');

    cartIcon.addEventListener('click', function (){
        const cartContent = document.querySelector('.cart_content')
        cartIcon.style.display = 'none';
        cartContent.style.display = 'block';
        shoppingCart.animate(ShoppingCartAni, ShoppingCartTiming)
    })
})

const ShoppingCartAni = [
    {height: 'auto'},
    {width: 'auto'},
]

const ShoppingCartTiming = {
    duration: 500,
};