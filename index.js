
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
    let interval = setInterval(run, 2000);
    document.querySelector('#serNext').onclick = serNextImg;
    function resetInterval(){
        clearInterval(interval);
        interval = setInterval(run, 2000);
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

    const serPageTag = document.querySelectorAll('.serTags')

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
    console.log(serPageTag[num].innerText);
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



// -------------------------------------timer
setInterval(function(){
    const curTime = new Date();
    let secDiff = 60 - curTime.getSeconds();
    document.querySelector('#timerSec').innerText = secDiff;
    // second
    let minDiff = 60 - curTime.getMinutes();
    document.querySelector('#timerMin').innerText = minDiff;
    // minute
    let hourDiff = 24 - curTime.getHours();
    document.querySelector('#timerHour').innerText = hourDiff;
    // hour
    let dayDiff = 31 - curTime.getDay();
    document.querySelector('#timerDay').innerText = dayDiff;
    // day
},1000);
