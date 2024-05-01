
window.addEventListener('load',function(){
    // ---------AOS
    let sectionBanner = document.querySelector('#secBanner');
    let bannerPos = sectionBanner.offsetTop;
    window.addEventListener('scroll', function(){
        aosNav();
        aosHealthCards();
        aosSloganLogo();
        aosWhyUsIcons();
    })
    // service info carousel
    let interval = setInterval(run, 3000);
    document.querySelector('#serNext').onclick = serNextImg;
    changeImg();
    function resetInterval(){
        clearInterval(interval);
        interval = setInterval(run, 3000);
    }
    function serNextImg(){
        num++;
        changeImg();
        resetInterval();
    }
    document.querySelector('#serLast').onclick = serLastImg;
    function serLastImg(){
        num--;
        changeImg();
        resetInterval();
    }
    let serPageTag = document.querySelectorAll('.serTags');
    for (let i = 0; i<serPageTag.length; i++){
        serPageTag[i].onclick =  function (){
        let pageNum =  Array.prototype.indexOf.call(serPageTag, this)
        num = pageNum;
        changeImg();
        resetInterval();
    }}
    

})
// -------------------------------------AOS
function aosNav() {
    let navBar = document.getElementById("nav_bar");
    if (window.scrollY === 0) {
        navBar.style.backgroundColor = "rgba(0,0,0,0)";
    } else {
        navBar.style.backgroundColor = "#fff";
    }
};

function aosHealthCards() {
    if (window.scrollY > 50) {
        document.getElementById("health_list").style.transform = "translateY(-50%)";
    } else {
        document.getElementById("health_list").style.transform = "translateY(0)";
    }
};

function aosSloganLogo(){
    const sloganLogo = document.querySelector('#slogan_logo');
    let secSloganPos = document.querySelector('.section_slogan').getBoundingClientRect().top;
    let secSloganPosY = secSloganPos + window.scrollY;
    let currScroll = window.scrollY;
    let scrollDiff = scrollY - secSloganPosY;
    // 定義作用起始點

    let sloganTxtPos = document.querySelector('#sloganTxt').getBoundingClientRect().top;
    let sloganTxtPosY = sloganTxtPos + window.scrollY + 100;
    let scrollEnd = sloganTxtPosY - secSloganPosY
    // 定義作用終點
    
    if (currScroll > secSloganPosY && currScroll <= sloganTxtPosY) {
        sloganLogo.style.top = `${scrollDiff}px`;
    } else if (currScroll > sloganTxtPosY) {
        sloganLogo.style.top = `${scrollEnd}px`;
        serShow();
    } else {
        sloganLogo.style.top = '0';
        serHide();
    }
}


function aosWhyUsIcons(){
    const whyUsCard = document.querySelectorAll('.section_slogan .card');
    let sloganTxtPos = document.querySelector('#sloganTxt').getBoundingClientRect().top;
    let sloganTxtPosY = sloganTxtPos + window.scrollY - 100;
    if (scrollY > sloganTxtPosY) {
        for (let i = 0; i<whyUsCard.length; i++) {
            setTimeout(function(){
                whyUsCard[i].style.transform = 'translateY(100px)';
            },500*i)
        }
    } else {
        for (let j = 0; j<whyUsCard.length; j++) {
            whyUsCard[j].style.transform = 'translateY(300px)';
        }
    }
}


// -------------------------------------Service_info
let serContent = [
    {
        title: "多樣寵物用品",
        desc: "在我們的網站上，您可以找到各種寵物用品，包括食品、玩具、床舖等，滿足您寵物的各種需求。我們提供方便的購物體驗，讓您輕鬆選購所需商品。",
    },
    {
        title: "24小時急診預約",
        desc: "我們提供24小時急診預約服務，讓您可以在緊急情況下即時預約寵物醫療服務。無論是晚上還是假日，我們隨時為您提供專業的醫療支援，確保您的寵物健康。",
    },
    {
        title: "視訊診療服務",
        desc: "通過我們的視訊診療服務，您可以與我們的專業獸醫進行即時線上諮詢。這使您無需前往動物醫院，即可獲得專業的醫療建議和治療方案，為您的寵物提供即時幫助。",
    },
    {
        title: "健康資訊分享",
        desc: "我們提供專業的寵物健康資訊，涵蓋飼養、營養、健康問題等方面。這些資訊有助於您更好地了解如何照顧您的寵物，預防和處理可能出現的健康問題，讓您的寵物始終保持健康和快樂。",
    },
    {
        title: "最新消息與促銷",
        desc: "我們定期更新最新消息和促銷活動，讓您第一時間了解公司的動態和優惠。無論是新產品推出、特價優惠還是健康資訊分享，我們都將及時通知您，讓您不會錯過任何重要信息。",
    },
]

let num = 0;
// 設定輪播初始值
function changeImg(){
    const serImgs = document.querySelectorAll('.section_service_info .service_carousel .pic img');
    const serTitle = document.querySelector('#serTitle');
    const serDesc = document.querySelector('#serDesc');

    let serPageTag = document.querySelectorAll('.serTags')

    if (num > serImgs.length - 1){
        num = 0;
    } else if (num < 0) {
        num = serImgs.length -1;
    }

    for(let i = 0; i<serImgs.length; i++){
        serImgs[i].style.opacity = 0;
        serPageTag[i].classList.remove('serHighlight')
    }
    serTitle.innerText = serContent[num].title;
    serDesc.innerText = serContent[num].desc;
    serImgs[num].style.opacity = '1';
    serPageTag[num].classList.add('serHighlight');
}

function run(){
    changeImg();
    num++
}

function serShow(){
    let secSerInfo = document.querySelector('.section_service_info')
    secSerInfo.style.transform = 'translateY(0px)'
    secSerInfo.style.visibility = 'unset'
}
function serHide(){
    let secSerInfo = document.querySelector('.section_service_info')
    secSerInfo.style.transform = 'translateY(200px)'
    secSerInfo.style.visibility = 'hidden'
}

// function selectNum(e){
//     let num = e.target.innerText;
//     console.log(num);
//     document.querySelectorAll('.serTag span').indexOf(num);
//     console.log(document.querySelectorAll('.serTag span').indexOf(num))
// }


// -------------------------------------timer
setInterval(function(){
    const curTime = new Date();
    let secDiff = 59 - curTime.getSeconds();
    document.querySelector('#timerSec').innerText = secDiff;
    // second
    let minDiff = 59 - curTime.getMinutes();
    document.querySelector('#timerMin').innerText = minDiff;
    // minute
    let hourDiff = 23 - curTime.getHours();
    document.querySelector('#timerHour').innerText = hourDiff;
    // hour
    let dayDiff = 30 - curTime.getDay();
    document.querySelector('#timerDay').innerText = dayDiff;
    // day
},1000);


// productList

const productList = [{
    itemNum: 1,
    pet: 'dog',
    type: 'feed',
    itemName: 'Brood 健康吃狗糧',
    tag: '#成幼犬 #1.5KG #多口味',
    img: 'img/item_img.png',
    price: 1399,
    desc: `<h2>Brood健康吃狗糧</h2><p>Brood健康吃狗糧是您可信賴的寵物營養夥伴，為您的毛孩提供全面均衡的營養支持。這款狗糧不僅專為狗狗的健康而設計，更融合了科學營養和天然成分，打造出一種讓您安心的選擇。</p><p>產品賣點：</p><p>全面均衡的營養：Brood狗糧經過專業營養師的設計，確保每一口都充滿著狗狗所需的營養，包括蛋白質、脂肪、纖維、維生素和礦物質，助您的狗狗維持良好的健康狀態。</p><p>天然成分：我們堅信天然成分是狗狗健康的關鍵。因此，Brood狗糧採用高品質的天然成分，不含人工添加物、填充劑或防腐劑，給您的狗狗提供最純淨、最健康的飲食選擇。</p><p>易於消化：我們特別設計的配方有助於促進狗狗的消化系統健康，減少消化問題的發生，讓您的毛孩可以更好地吸收營養，保持活力和健康。</p><p>美味可口：Brood狗糧不僅營養豐富，而且味道美味，深受狗狗的喜愛。每一口都讓您的狗狗享受到美味的同時，也獲得了全面的營養支持。</p><p>無論是您的狗狗處於成長階段、活躍的生活方式還是需要特殊照顧，Brood健康吃狗糧都是您最佳的選擇。給您的毛孩一個健康、美味的生活開始，選擇Brood，選擇關愛！</p>`,
    richContent: `<p>品名：Brood健康吃狗糧</p><p>重量：1.5kg</p><p>敘述：這款Brood健康吃狗糧是您毛孩的理想食品選擇。精心挑選的成分組合，包括高品質的蛋白質、天然的蔬果和維生素礦物質，確保您的狗狗獲得全面均衡的營養支持。經過專業配方，每一粒狗糧都注入了愛與關懷，以確保您的寵物健康活力。無添加人工色素、防腐劑或填充劑，給予您的毛孩健康又美味的飲食體驗。</p><p>成分表：- 高品質蛋白質源（例如雞肉、羊肉、牛肉等）- 天然蔬果（例如紅蘿蔔、菠菜、番茄等）- 維生素礦物質混合物- 穀類（例如糙米、燕麥等）- 水（請注意：此成分表僅為示範，實際成分可能會有所不同，請參考包裝上的標籤獲取正確的信息。）</p>`,
    itemNum: 2,
    pet: 'cat',
    type: 'feed',
    itemName: '營養貓咪飼料',
    tag: '#營養 #貓咪 #飼料',
    img: 'img/item_img.png',
    price: 799,
    special: true,
    desc: `<h2>營養貓咪飼料</h2><p>這款營養貓咪飼料是您貓咪健康飲食的最佳選擇。精選高品質的成分，包括優質蛋白質、維生素和礦物質，確保您的貓咪獲得全面均衡的營養支持。這種飼料不僅美味，而且容易消化，適合所有年齡段的貓咪。</p>`,
    richContent: `<p>品名：營養貓咪飼料</p><p>類型：飼料</p><p>適用寵物：貓</p><p>標籤：#營養 #貓咪 #飼料</p><p>價格：NT$799</p><p>敘述：這款營養貓咪飼料是您貓咪健康飲食的最佳選擇。精選高品質的成分，包括優質蛋白質、維生素和礦物質，確保您的貓咪獲得全面均衡的營養支持。這種飼料不僅美味，而且容易消化，適合所有年齡段的貓咪。</p>`,
    },
    {
    itemNum: 3,
    pet: 'cat',
    type: 'snackCan',
    itemName: '美味雞肉罐頭點心',
    tag: '#多口味 #罐頭 #點心',
    img: 'img/item_img.png',
    price: 299,
    special: false,
    desc: `<h2>美味雞肉罐頭點心</h2><p>這款美味雞肉罐頭點心是您貓咪的最愛。採用新鮮雞肉製成，口感嫩滑，味道美味。每一 口都充滿著雞肉的鮮香，絕對能滿足您的貓咪的味蕾。</p>`,
    richContent: `<p>品名：美味雞肉罐頭點心</p><p>類型：罐頭點心</p><p>適用寵物：貓</p><p>標籤：#多口味 #罐頭 #點心</p><p>價格：NT$299</p><p>敘述：這款美味雞肉罐頭點心是您貓咪的最愛。採用新鮮雞肉製成，口感嫩滑，味道美味。每一口都充滿著雞肉的鮮香，絕對能滿足您的貓咪的味蕾。</p>`,
    },
    {
    itemNum: 4,
    pet: 'cat',
    type: 'health',
    itemName: '貓咪關節保健食品',
    tag: '#保健 #關節 #貓咪',
    img: 'img/item_img.png',
    price: 599,
    special: false,
    desc: `<h2>貓咪關節保健食品</h2><p>這款貓咪關節保健食品專為您的貓咪的健康而設計。含有豐富的關節保健成分，如葡萄糖胺和軟骨素，有助於維持貓咪的關節靈活性和健康。每天一次，讓您的貓咪保持活力和快樂！</p>`,
    richContent: `<p>品名：貓咪關節保健食品</p><p>類型：保健食品</p><p>適用寵物：貓</p><p>標籤：#保健 #關節 #貓咪</p><p>價格：NT$599</p><p>敘述：這款貓咪關節保健食品專為您的貓咪的健康而設計。含有豐富的關節保健成分，如葡萄糖胺和軟骨素，有助於維持貓咪的關節靈活性和健康。每天一次，讓您的貓咪保持活力和快樂！</p>`,
    },
    {
    itemNum: 5,
    pet: 'cat',
    type: 'mealCan',
    itemName: '美味雞肉主食罐頭',
    tag: '#主食罐頭 #雞肉 #美味',
    img: 'img/item_img.png',
    price: 349,
    special: true,
    desc: `<h2>美味雞肉主食罐頭</h2><p>這款美味雞肉主食罐頭是您貓咪的最愛。以新鮮雞肉為主要成分，口感嫩滑，味道美味。營養豐富，適合作為您貓咪的日常主食。</p>`,
    richContent: `<p>品名：美味雞肉主食罐頭</p><p>類型：主食罐頭</p><p>適用寵物：貓</p><p>標籤：#主食罐頭 #雞肉 #美味</p><p>價格：NT$349</p><p>敘述：這款美味雞肉主食罐頭是您貓咪的最愛。以新鮮雞肉為主要成分，口感嫩滑，味道美味。營養豐富，適合作為您貓咪的日常主食。</p>`,
    },
    {
    itemNum: 6,
    pet: 'cat',
    type: 'snacks',
    itemName: '美味貓咪點心凍乾',
    tag: '#點心 #凍乾 #美味',
    img: 'img/item_img.png',
    price: 199,
    special: false,
    desc: `<h2>美味貓咪點心凍乾</h2><p>這款美味貓咪點心凍乾是您貓咪的最愛。使用新鮮食材，保留了原始的營養和風味。不含人工添加劑，絕對健康可口。</p>`,
    richContent: `<p>品名：美味貓咪點心凍乾</p><p>類型：點心凍乾</p><p>適用寵物：貓</p><p>標籤：#點心 #凍乾 #美味</p><p>價格：NT$199</p><p>敘述：這款美味貓咪點心凍乾是您貓咪的最愛。使用新鮮食材，保留了原始的營養和風味。不含人工添加劑，絕對健康可口。</p>`,
    },
    {
    itemNum: 7,
    pet: 'cat',
    type: 'others',
    itemName: '貓咪尿布',
    tag: '#貓咪 #尿布 #其他用品',
    img: 'img/item_img.png',
    price: 99,
    special: false,
    desc: `<h2>貓咪尿布</h2><p>這款貓咪尿布是為了方便您的日常清潔工作而設計的。高吸水性材料，防漏防滲，保持家居清潔衛生。</p>`,
    richContent: `<p>品名：貓咪尿布</p><p>類型：其他用品</p><p>適用寵物：貓</p><p>標籤：#貓咪 #尿布 #其他用品</p><p>價格：NT$99</p><p>敘述：這款貓咪尿布是為了方便您的日常清潔工作而設計的。高吸水性材料，防漏防滲，保持家居清潔衛生。</p>`,
    },
    {
    itemNum: 8,
    pet: 'cat',
    type: 'toy',
    itemName: '貓咪玩具球',
    tag: '#玩具 #貓咪 #球',
    img: 'img/item_img.png',
    price: 79,
    special: false,
    desc: `<h2>貓咪玩具球</h2><p>這款貓咪玩具球是您貓咪的最愛。彈性設計，富有彈性，貓咪可以輕鬆捕捉和追逐。讓您的貓咪保持活潑和快樂！</p>`,
    richContent: `<p>品名：貓咪玩具球</p><p>類型：玩具</p><p>適用寵物：貓</p><p>標籤：#玩具 #貓咪 #球</p><p>價格：NT$79</p><p>敘述：這款貓咪玩具球是您貓咪的最愛。彈性設計，富有彈性，貓咪可以輕鬆捕捉和追逐。讓您的貓咪保持活潑和快樂！</p>`,
    },
    {
    itemNum: 9,
    pet: 'cat',
    type: 'rawMeat',
    itemName: '新鮮雞肉生食',
    tag: '#生食 #新鮮 #雞肉',
    img: 'img/item_img.png',
    price: 199,
    special: false,
    desc: `<h2>新鮮雞肉生食</h2><p>這款新鮮雞肉生食是您貓咪的最佳食材。高品質的雞肉，新鮮、天然、無添加，保留了原始的營養和風味。提供最健康的飲食選擇，讓您的貓咪保持健康和活力。</p>`,
    richContent: `<p>品名：新鮮雞肉生食</p><p>類型：生食</p><p>適用寵物：貓</p><p>標籤：#生食 #新鮮 #雞肉</p><p>價格：NT$199</p><p>敘述：這款新鮮雞肉生食是您貓咪的最佳食材。高品質的雞肉，新鮮、天然、無添加，保留了原始的營養和風味。提供最健康的飲食選擇，讓您的貓咪保持健康和活力。</p>`,
    }
]