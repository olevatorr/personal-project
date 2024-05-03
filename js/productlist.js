window.addEventListener('load', function () {
    window.addEventListener('scroll', function () {
        aosNav();
    });

    const productListContainer = document.querySelector('.product_list');
    const filterTypeButtons = document.querySelectorAll('.filter_type button');
    const filterSortSelect = document.querySelector('.filter_sort');
    const clearFilterButton = document.querySelector('.filter_type button:first-child');

    // 生成所有產品的 HTML 內容
    function createProductsHTML(products) {
        return `
        <div class="row row-cols-2 row-cols-lg-5">
        ${products.map(createProduct).join('')}
        </div>
        `;
    }

    // 生成單個產品的 HTML 內容
    function createProduct(product) {
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

    // 篩選產品
    
    function filterProducts() {
        const selectedPet = document.querySelector('.filter_type button.active')?.textContent;
        const selectedType = filterSortSelect.value;
        
        let filteredProducts = productList;

        if (selectedPet && selectedPet !== '清除篩選') {
            let petType;
            if (selectedPet === '犬') {
                petType = 'dog';
            } else if (selectedPet === '貓') {
                petType = 'cat';
            }

            filteredProducts = filteredProducts.filter(function (product) {
                return product.pet === petType;
            });
        }

        if (selectedType !== '請選擇') {
            if (selectedType === '特賣區') {
                filteredProducts = filteredProducts.filter(product => product.special);
            } else {
                const typeMap = {
                    '飼料': 'feed',
                    '點心罐頭': 'snackCan',
                    '保健食品': 'health',
                    '主食罐頭': 'mealCan',
                    '點心凍乾': 'snacks',
                    '其他用品': 'others',
                    '玩具': 'toy',
                    '生食專區': 'rawMeat'
                };
                const type = typeMap[selectedType];
                filteredProducts = filteredProducts.filter(product => product.type === type);
            }
        }

        productListContainer.innerHTML = createProductsHTML(filteredProducts);
        filteredProductList = filteredProducts;
    }

    // 清除篩選
    function clearFilter() {
        filterTypeButtons.forEach(btn => btn.classList.remove('active'));
        filterSortSelect.selectedIndex = 0;
        productListContainer.innerHTML = createProductsHTML(productList);
        filteredProductList = productList;
        sortPrice.classList.remove('fa-arrow-down-short-wide');
        sortPrice.classList.remove('fa-arrow-down-wide-short');
        sortPrice.classList.add('fa-filter-circle-dollar');
    }

    // 綁定篩選事件
    filterTypeButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (this === clearFilterButton) {
                clearFilter();
            } else {
                filterTypeButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                filterProducts();
            }
        });
    });

    // 價格排序
    const sortPrice = document.querySelector('#sortPrice');
    sortPrice.addEventListener('click', function(){
        if(this.className == 'fa-solid fa-filter-circle-dollar') {
            this.classList.remove('fa-filter-circle-dollar');
            this.classList.add('fa-arrow-down-wide-short');
            let productSortDiscreasing;
            if (filteredProductList == 'undefinded') {
                productSortDiscreasing = productList;
            } else {
                productSortDiscreasing = filteredProductList;
            }
            productSortDiscreasing = productSortDiscreasing.sort(function(a, b){
                return b.price - a.price;
            })
            productListContainer.innerHTML = createProductsHTML(productSortDiscreasing)

        } else if (this.className == 'fa-solid fa-arrow-down-wide-short') {
            this.classList.add('fa-arrow-down-short-wide');
            this.classList.remove('fa-arrow-down-wide-short');
            let productSortIncreasing;
            if (filteredProductList == 'undefinded') {
                productSortIncreasing = productList;
            } else {
                productSortIncreasing = filteredProductList;
            }
            productSortIncreasing = productSortIncreasing.sort(function(a, b){
                return a.price - b.price;
            })
            productListContainer.innerHTML = createProductsHTML(productSortIncreasing)

        } else {
            this.classList.remove('fa-arrow-down-short-wide');
            this.classList.remove('fa-arrow-down-wide-short');
            this.classList.add('fa-filter-circle-dollar');
            let productSortReset;
            if (filteredProductList == 'undefinded') {
                productSortReset = productList;
            } else {
                productSortReset = filteredProductList;
            }
            productListContainer.innerHTML = createProductsHTML(productSortReset)
        }
    })

    filterSortSelect.addEventListener('change', filterProducts);

    // 初始化產品列表
    productListContainer.innerHTML = createProductsHTML(productList);
});

let filteredProductList;


function aosNav() {
    let navBar = document.getElementById("nav_bar");
    if (window.scrollY === 0) {
        navBar.style.backgroundColor = "rgba(0,0,0,0)";
    } else {
        navBar.style.backgroundColor = "#fff";
    }
}