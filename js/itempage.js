window.addEventListener('load', () => {
    window.addEventListener('scroll', function () {
        aosNav();
    });


    const imgs = document.querySelectorAll('.item_sub_pics img');
    imgs.forEach( img => {
        img.addEventListener('click', (e) => {
            let curImg = e.target.src;
            e.target.src = changeImage(curImg);
        })
    })

    const otherItems = document.querySelector('.other_items');
    console.log(otherItems);
    if (otherItems) {
        otherItems.innerHTML = '';
        otherItems.innerHTML = createRandProduct();
    }


})


function changeImage(curImg) {
    let tempImg = document.getElementById('mainImg').src;
    document.getElementById('mainImg').src = curImg;
    return tempImg;
}


let itemPageOtherQty = 5;

function createRandProduct(product) {
    let aryRand = [];
    for (let i = 0; i < itemPageOtherQty; i++) {
        let rand = Math.floor(Math.random() * productList.length);
        if (!aryRand.includes(rand)) {
            aryRand.push(rand);
        } else {
            i--;
        }
    }

    let otherObj = [];

    aryRand.forEach( (rand) => {
        otherObj.push(productList[rand]);
    })
    console.log(otherObj);

    let otherItemHTML = '';
    for (let i = 0; i < itemPageOtherQty; i++) {
        let item = otherObj[i];
        otherItemHTML += `
            <a href="itempage.html" class="col" data-has-cart-icon="true">
                <div class="item">
                    <div class="item_pic">
                        <img src="${item.img}" alt="${item.itemName}">
                    </div>
                    <h4>${item.itemName}</h4>
                    <li>
                        ${item.tag}
                    </li>
                    <div class="item_bottom">
                        <div class="price">NT$ ${item.price}</div>
                        <i class="fa-solid fa-cart-plus" data-item-name="${item.itemName}"></i>
                    </div>
                </div>
            </a>
        `;
    }
    return otherItemHTML;
}


function aosNav() {
    let navBar = document.getElementById("nav_bar");
    if (window.scrollY === 0) {
        navBar.style.backgroundColor = "rgba(0,0,0,0)";
    } else {
        navBar.style.backgroundColor = "#fff";
    }
}