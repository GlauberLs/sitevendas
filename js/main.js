import navComponente from "./nav.js"
import Banner from "./banner.js";
import card from "./cards.js"
import paginas from "./paginas.js"

let pag = new paginas

function mainPage(){
let Menus = ["Home","Produtos","Contato"]
let nav = new navComponente();
let CardProduto = new card();

nav.CriarNovoMenu("barra_01",Menus)
nav.CriarBarraNavUsuario("barra_01","home")

let B =new Banner();
let BannerInfo = ["<h1>Compra rapida</h1> <br/> <h3>Compre games mais rápido...</h3>","<h1>Games do momento</h1> <br/> <h3>Lançamentos</h3>","<h1>Games em desconto</h1>"]
B.CriarBanner("banner_1")
B.ModificaBanner("banner_1",BannerInfo,0)

let BannerIndex = 0
let bannerTime = setInterval(()=>{
    try{

    
    if(BannerIndex >= 2){
        BannerIndex = 0
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
    BannerIndex+=1
}
catch{
    console.log("Banner foi parado por algum erro")
    clearInterval(bannerTime)
}

},9000)

document.getElementById("btBannerProximo").addEventListener("click",()=>{
    if(BannerIndex >= 2){
        BannerIndex = 0
    }
    else{
        BannerIndex+=1
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)

})

    document.getElementById("btBannerAnterior").addEventListener("click",()=>{
        if(BannerIndex <=0){
            BannerIndex = 2
        }
        else{
            BannerIndex-=1
        }
        B.ModificaBanner("banner_1",BannerInfo,BannerIndex)

    })
    CardProduto.EscolherTipo("card sb")
    CardProduto.CriarCards("PortalCard1","Lançamentos","jogos com diversão garantida")
    CardProduto.CriarCards("PortalCard1","Jogos playstation","Grandes exclusivos")

    let CardVenda = new card()
    CardVenda.EscolherTipo("cardProduto sb")
    CardVenda.CriarCards("PortalCard1","Jogos xbox","Grande experiência multiplay")

    let CardNovo = new card()
    CardNovo.EscolherTipo("cardNintendo sb")
    CardNovo.CriarCards("PortalCard1","Jogos Nintendo","Diversão em família")

    let Card03 = new card()
    Card03.EscolherTipo("cardPc sb")
    Card03.CriarCards("PortalCard1","Jogos de pc","Diversidades")
}

mainPage()

function produtosPage(){
    let pagina = document.getElementById("pagina")
    pagina.innerHTML = ""
    document.getElementsByClassName("localnav")[0].getElementsByTagName("h4")[0].innerHTML = "produtos"
    pag.PaginaDeProdutos()
}
let HomeMenu = document.getElementById("Menu_02").getElementsByTagName("li")[0].getElementsByTagName("a")[0]
HomeMenu.addEventListener("click",()=>{
    window.location.reload()

})

let produtoMenu = document.getElementById("Menu_02").getElementsByTagName("li")[1].getElementsByTagName("a")[0]
produtoMenu.addEventListener("click",produtosPage)

let Menu_Visivel = false
document.getElementById("barra_01").addEventListener("click",()=>{
    if(Menu_Visivel ==false){
        document.getElementById("Menu_02").style.visibility = "visible"
        Menu_Visivel = true
    }
    else
    {
        document.getElementById("Menu_02").style.visibility = "hidden"
        Menu_Visivel = false
    }
    
})
