window.addEventListener('load', function () {
    window.addEventListener('scroll', function () {
        aosNav();
    })

    const productListContainer = document.querySelector('.product_list');

    // 如果存在，則插入動態生成的 HTML 內容
    if (productListContainer) {
    productListContainer.innerHTML = generateProductListHTML();
}
})

function aosNav() {
    let navBar = document.getElementById("nav_bar");
    if (window.scrollY === 0) {
        navBar.style.backgroundColor = "rgba(0,0,0,0)";
    } else {
        navBar.style.backgroundColor = "#fff";
    }
};


function generateProductHTML(product) {
    // const itemName = product.itemName;
    // const tag = product.tag;
    // const img = product.img;
    // const price = product.price;
    // 可縮寫如下
    const { itemName, tag, img, price } = product;
    const tagList = tag.split(' ');

    return `
    <div class="col">
        <div class="item">
            <div class="item_pic">
            <img src="${img}" alt="${itemName}">
            </div>
            <h4>${itemName}</h4>
            <ul>
            ${tagList.map((tag) => `<li>${tag}</li>`).join('')}
            </ul>
            <div class="item_bottom">
            <div class="price">NT$ ${price}</div>
            <i class="fa-solid fa-cart-plus"></i>
            </div>
        </div>
    </div>
    `;
}

// 生成所有產品的 HTML 內容
function generateProductListHTML() {
    return `
    <div class="row row-cols-2 row-cols-lg-5">
    ${productList.map(generateProductHTML).join('')}
    </div>
    `;
}

// 檢測是否存在 product_list 類別的容器元素
