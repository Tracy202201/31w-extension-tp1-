(function(){
    console.log('Début du carrousel')
   
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerieImg = elmGalerie.querySelectorAll("figure figure img")
    let elmCarrousel = document.querySelector('.carrousel')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    let elmCarrousel__fermeture = document.querySelector('.carrousel__fermeture')
    let elmCarrousel__radio = document.querySelector('.carrousel__radio')
    console.log(elmGalerieImg[0].getAttribute('src'))
    let index = 0
    for (const img of elmGalerieImg){
        ajouter_elmImg(img)
        ajouter_elmRadio()
        img.addEventListener('mousedown', function(){
        elmCarrousel.classList.add('carrousel__ouvrir') 
    }) 
    }
//////////////////////////////////////////////////////////  ajouter_elmimg
function ajouter_elmImg(img){
    let elmImg = document.createElement('img')
    elmImg.classList.add('carrousel__figure__img')
    elmImg.setAttribute('src', img.getAttribute('src'))
    elmCarrousel__figure.appendChild(elmImg)
    elmImg.dataset.index = index
}
})()