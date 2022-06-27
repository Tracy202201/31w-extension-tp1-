(function () {
    console.log('début du carrousel');
    let elmGalarie = document.querySelector(".galarie");

    let elmGalarie__img = document.querySelectorAll('.galarie figure img');

    console.log(elmGalarie__img);

    for (const img of elmGalarie__img) {
        img.addEventListener('mousedown', function () {
            console.log(img.getAttribute('src'));
        })
        
    }
})()

