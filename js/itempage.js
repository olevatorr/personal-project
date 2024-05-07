window.addEventListener('load', () => {
    const imgs = document.querySelectorAll('.item_sub_pics img');
    imgs.forEach( img => {
        img.addEventListener('click', (e) => {
            let curImg = e.target.src;
            e.target.src = changeImage(curImg);
        })
    })
})


function changeImage(curImg) {
    let tempImg = document.getElementById('mainImg').src;
    document.getElementById('mainImg').src = curImg;
    return tempImg;
}