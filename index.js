window.addEventListener('scroll', function () {
    let scrollInit = 0;
    let navBar = document.getElementById("nav_bar");
    if (window.scrollY === scrollInit) {
        navBar.style.backgroundColor = "rgba(0,0,0,0)";
    } else {
        navBar.style.backgroundColor = "#fff";
    }
}, false);

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        document.getElementById("health_list").style.transform = "translateY(-50%)";
    } else {
        document.getElementById("health_list").style.transform = "translateY(0)";
    }
}, false);



window.addEventListener('scroll', function () {
    const sloganLogo = document.querySelector('#slogan_logo');
    let currScroll = window.scrollY;
    let scrollDiff = scrollY - 990;
    if (currScroll > 990 && currScroll <= 1300) {
        sloganLogo.style.position = 'relative';
        sloganLogo.style.top = `${scrollDiff}px`;
    } else if (currScroll > 1300) {
        sloganLogo.style.top = "310px";
    } else {
        sloganLogo.style.position = 'static';
        sloganLogo.style.top = '';
    }
}, false)


window.addEventListener('scroll', function(){
    const whyUsCard = document.querySelectorAll('.whyUsCards .card');
    if (scrollY < 1145) {
        for (let j = 0; j<whyUsCard.length; j++) {
            whyUsCard[j].style.transform = 'translateY(200px)';
            console.log(whyUsCard[j].style.transform);
        }
    } else {
        for (let i = 0; i<whyUsCard.length; i++) {
            setInterval(function(){
                whyUsCard[i].style.transform = 'unset';
            },500*i)
            console.log(whyUsCard[i].style.transform);
    }
}},false)
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