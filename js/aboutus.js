window.addEventListener('load', () => {
  window.addEventListener('scroll', () => {
      aosNav();
  });

});

function aosNav() {
  let navBar = document.getElementById("nav_bar");
  if (window.scrollY === 0) {
      navBar.style.backgroundColor = "rgba(0,0,0,0)";
  } else {
      navBar.style.backgroundColor = "#fff";
  }
};

function fadeIn(element) {
  element.style.opacity = 0;
  element.style.transition = 'opacity 1s';
  setTimeout(function () {
    element.style.opacity = 1;
  }, 100);
}

function slideInLeft(element) {
  element.style.opacity = 0;
  element.style.transform = 'translateX(-100%)';
  element.style.transition = 'opacity 1s, transform 1s';
  setTimeout(function () {
    element.style.opacity = 1;
    element.style.transform = 'translateX(0)';
  }, 100);
}

function slideInRight(element) {
  element.style.opacity = 0;
  element.style.transform = 'translateX(100%)';
  element.style.transition = 'opacity 1s, transform 1s';
  setTimeout(function () {
    element.style.opacity = 1;
    element.style.transform = 'translateX(0)';
  }, 100);
}

function zoomIn(element) {
  element.style.opacity = 0;
  element.style.transform = 'scale(0.5)';
  element.style.transition = 'opacity 1s, transform 1s';
  setTimeout(function () {
    element.style.opacity = 1;
    element.style.transform = 'scale(1)';
  }, 100);
}

function flipIn(element) {
  element.style.opacity = 0;
  element.style.transform = 'rotateY(180deg)';
  element.style.transition = 'opacity 1s, transform 1s';
  setTimeout(function () {
    element.style.opacity = 1;
    element.style.transform = 'rotateY(0)';
  }, 100);
}

function slideInBottom(element) {
  element.style.opacity = 0;
  element.style.transform = 'translateY(100%)';
  element.style.transition = 'opacity 1s, transform 1s';
  setTimeout(function () {
    element.style.opacity = 1;
    element.style.transform = 'translateY(0)';
  }, 100);
}

// 獲取所有具有動畫類的元素
var fadeInElements = document.querySelectorAll('.fade-in');
var slideInLeftElements = document.querySelectorAll('.slide-in-left');
var slideInRightElements = document.querySelectorAll('.slide-in-right');
var zoomInElements = document.querySelectorAll('.zoom-in');
var flipInElements = document.querySelectorAll('.flip-in');
var slideInBottomElements = document.querySelectorAll('.slide-in-bottom');

// 為每個元素應用相應的動畫效果
fadeInElements.forEach(function(element) {
  fadeIn(element);
});

slideInLeftElements.forEach(function(element) {
  slideInLeft(element);
});

slideInRightElements.forEach(function(element) {
  slideInRight(element);
});

zoomInElements.forEach(function(element) {
  zoomIn(element);
});

flipInElements.forEach(function(element) {
  flipIn(element);
});

slideInBottomElements.forEach(function(element) {
  slideInBottom(element);
});
