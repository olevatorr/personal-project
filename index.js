window.addEventListener('load',function(){
    let sectionBanner = document.querySelector('#secBanner');
    let bannerPos = sectionBanner.offsetTop;
    window.addEventListener('scroll', function(){
        aosNav();
        aosHealthCards();
        aosSloganLogo();
        aosWhyUsIcons()
    })
})




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
    } else {
        sloganLogo.style.top = '0';
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
// -------------------------------------AOS




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

// -------------------------------------timer