window.addEventListener('load', function () {
    window.addEventListener('scroll', function () {
        aosNav();
    });

    const productListContainer = document.querySelector('.product_list');
    const filterTypeButtons = document.querySelectorAll('.filter_type button');
    const filterSortSelect = document.querySelector('.filter_sort');
    const clearFilterButton = document.querySelector('.filter_type button:first-child');

    // 生成所有產品的 HTML 內容
    function generateProductHTML(products) {
        return `
        <div class="row row-cols-2 row-cols-lg-5">
        ${products.map(createProduct).join('')}
        </div>
        `; 
        // join去除","
    }

    // 生成單個產品的 HTML 內容
    function createProduct(product) {
        const { itemName, tag, img, price } = product; 
        const tagList = tag.split(' '); 
        // 去除tag中的空格
        return `
        <a href="itempage.html" class="col">
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
                    <i class="fa-solid fa-cart-plus" data-item-name="${itemName}"></i>
                </div>
            </div>
        </a>
        `;
    }

    // 篩選產品
    function filterProducts() {
        const selectedPet = document.querySelector('.filter_type button.active')?.textContent; 
        // ?.判斷是否有值可取，若無也不會導致null/undefined而無法繼續運作
        const selectedType = filterSortSelect.value;

        let filteredProducts = productList;

        if (selectedPet && selectedPet !== '清除篩選') {
            let petType;
            if (selectedPet === '犬') {
                petType = 'dog';
            } else if (selectedPet === '貓') {
                petType = 'cat';
            }
            // 轉換為type中對應的值
            filteredProducts = filteredProducts.filter(function (product) {
                return product.pet === petType;
            });
        }

        if (selectedType !== '篩選器') {
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
                }; // 對應select中文與productList
                const type = typeMap[selectedType];
                filteredProducts = filteredProducts.filter(product => product.type === type);
            }
        }

        filteredProductList = filteredProducts; 
        // 更新篩選後的產品列表
        generateProductList(1); 
        // 重新生成產品列表,從第一頁開始
        productListContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('fa-cart-plus')) {
                event.preventDefault(); // 阻止<a>標籤的默認行為
                event.stopPropagation(); // 阻止事件冒泡
                const itemName = event.target.dataset.itemName;
                addToCart(itemName);
            }
        });
    
    }


    // 清除篩選
    function clearFilter() {
        filterTypeButtons.forEach(btn => btn.classList.remove('active'));
        filterSortSelect.selectedIndex = 0;
        filteredProductList = productList; 
        // 重置篩選後的產品列表為原始產品列表
        generateProductList(1); 
        // 重新生成產品列表,從第一頁開始
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
    sortPrice.addEventListener('click', function () {
        let productSort = filteredProductList || productList; // 如果沒有篩選,則使用原始產品列表
        console.log(filteredProductList)
        if (this.classList.contains('fa-filter-circle-dollar')) {
            this.classList.remove('fa-filter-circle-dollar');
            this.classList.add('fa-arrow-down-wide-short');
            productSort.sort((a, b) => b.price - a.price); // 降序排序
        } else if (this.classList.contains('fa-arrow-down-wide-short')) {
            this.classList.remove('fa-arrow-down-wide-short');
            this.classList.add('fa-arrow-down-short-wide');
            productSort.sort((a, b) => a.price - b.price); // 升序排序
        } else {
            this.classList.remove('fa-arrow-down-short-wide');
            this.classList.add('fa-filter-circle-dollar');
            productSort = filteredProductList || productList
            productSort.sort((a, b) => a.itemNum - b.itemNum); // 恢復原始排序
        }

        filteredProductList = productSort; // 更新篩選後的產品列表
        generateProductList(1); // 重新生成產品列表,從第一頁開始
    });


    filterSortSelect.addEventListener('change', filterProducts);

    // 每頁顯示的產品數量
    const productsPerPage = 20;

    // 當前頁碼
    let currentPage = 1;

    // 生成產品列表的函數
    function generateProductList(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const products = (filteredProductList || productList).slice(startIndex, endIndex); // 使用篩選後的產品列表或原始產品列表

        productListContainer.innerHTML = generateProductHTML(products);

        updatePagination();
    }

    // 更新分頁按鈕的函數
    function updatePagination() {
        const totalPages = Math.ceil((filteredProductList || productList).length / productsPerPage); // 使用篩選後的產品列表或原始產品列表
        const paginationList = document.querySelector('.page_bar ul');
        paginationList.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = i;
            if (i === currentPage) {
                li.classList.add('active');
            }
            a.addEventListener('click', (event) => {
                event.preventDefault();
                currentPage = i;
                generateProductList(currentPage);
            });
            li.appendChild(a);
            paginationList.appendChild(li);
        }

        const lastpageBtn = document.querySelector('.lastpage_btn');
        const nextpageBtn = document.querySelector('.nextpage_btn');

        lastpageBtn.addEventListener('click', (event) => {
            event.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                generateProductList(currentPage);
            }
        });

        nextpageBtn.addEventListener('click', (event) => {
            event.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                generateProductList(currentPage);
            }
        });
    }

    // 初始化產品列表
    generateProductList(currentPage);
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