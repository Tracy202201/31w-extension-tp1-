/**
 * Fonction IIFE qui permet de controler l'affichage du carrousel
 * 
 * 
 */

 (function(){
    console.log('Début du carrousel')
   
    let elmGalerie = document.querySelector('.galerie')
    //cree collection d'images galerie 
    let elmGalerieImg = elmGalerie.querySelectorAll("figure figure img")
    //element carrousel
    let elmCarrousel = document.querySelector('.carrousel')

    let elmCarrousel__msg = document.querySelector('.carrousel__msg')

    //ensemble des images carrousel 
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    
    let elmCarrousel__fermeture = document.querySelector('.carrousel__fermeture')
   
    //ensemble des radio buttons 
    let elmCarrousel__radio = document.querySelector('.carrousel__radio')
     
    console.log(elmGalerieImg[0].getAttribute('src'))
    //index = 0, relier chaque image au radio button
    let index = 0

    let ancien_index = -1

    let compteur =0 

    //parcourir tous les images de galerie 
    for (const img of elmGalerieImg){
        //ajouter compteur pour que image peux afficher par chiquer 
        img.dataset.index = compteur++
        ajouter_elmImg(img)//ajouter element img de galarie (img provient de la galarie)
        ajouter_elmMsg()
        ajouter_elmRadio() //ajouter radio button 
        //des on clique sur galarie, on ajouter des transformation, opacite de carrousel(chaque image va ecouter) 
        img.addEventListener('mousedown', function(){
        elmCarrousel.classList.add('carrousel__ouvrir') 
        index = this.dataset.index
        affiche_carrousel_img()
        
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

    function ajouter_elmMsg(){
        let elmMsg = document.createElement('msg')
        elmMsg.classList.add('carrousel__msg_Titre')
        elmCarrousel__msg.appendChild(elmMsg)
    }

    function ajouter_elmRadio(){
        let elmRadio = document.createElement('input')
        elmRadio.setAttribute('type','radio')
        elmRadio.setAttribute('name','radImg')
        elmRadio.dataset.index = index
        index = index+1
        elmCarrousel__radio.appendChild(elmRadio)
        //ecouteur pour selectionner une nouvelle image 
        elmRadio.addEventListener('mousedown', function(){
            index = this.dataset.index
            affiche_carrousel_img()   
        })
    }
    /**
     * Ecouteur pour fermer le carrousel
     */
    elmCarrousel__fermeture.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove('carrousel__ouvrir') 
    })


    function affiche_carrousel_img()
    {

        if(ancien_index != -1){
            //desactiver image precedent 
            elmCarrousel__figure.children[ancien_index].classList.remove('carrousel__figure__img--activer')
        }
        elmCarrousel__figure.children[index].classList.add('carrousel__figure__img--activer') //standard langue
        //sauvergarder des ancien image 
        ancien_index = index
    }


})()

