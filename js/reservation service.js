window.addEventListener('load', () => {
    window.addEventListener('scroll', () => {
        aosNav();
    })
    
    const typeRadio = document.querySelectorAll('.video_reserve_type input[type="radio"]');

    typeRadio.forEach( radio => {
        radio.addEventListener('change', () => {
            openForm();
        })
    })

    const submitBtn = document.querySelectorAll('.submit input[type="submit"]');
    submitBtn.forEach((btn) => {
        btn.addEventListener('click', (event) => {
        document.querySelector('#errorPopup').style.display = 'block';
        })
    });


    const closePopup = document.querySelector('#closePopup');
    closePopup.addEventListener('click', () => {
        window.location.href = 'index.html';
    })

    const openMap = document.querySelector('#openMap');
    openMap.addEventListener('click', () => {
        const map = document.querySelector('.googlemap');
        if (map.style.maxHeight === '0px') {
            map.style.maxHeight = '1000px';
        } else {
            map.style.maxHeight = '0px';
        }
    })
});


function aosNav() {
    let navBar = document.getElementById("nav_bar");
    if (window.scrollY === 0) {
        navBar.style.backgroundColor = "rgba(0,0,0,0)";
    } else {
        navBar.style.backgroundColor = "#fff";
    }
};



function openForm() {
    const videoReserve = document.querySelector('#video_reserve');
    const emergencyReserve = document.querySelector('#emergency_reserve');
    const typeDog = document.querySelector('#pet_type_dog');
    const typeCat = document.querySelector('#pet_type_cat');
    const serviceVideo = document.querySelector('#service_type_video');
    const serviceEmergency = document.querySelector('#service_type_emergency');

    if (typeDog.checked || typeCat.checked) {
        if (serviceVideo.checked) {
            videoReserve.style.display = 'block';
            emergencyReserve.style.display = 'none';
        } else if (serviceEmergency.checked){
            videoReserve.style.display = 'none';
            emergencyReserve.style.display = 'block';
        }
    }
}