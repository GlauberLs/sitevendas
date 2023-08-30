
class Banner{
    CriarBanner(IdAlvo,Texto){
        let Elemento = document.getElementById(IdAlvo)
        Elemento.innerHTML +="<article>"+Texto+"</aticle>"

    }

}

export default Banner