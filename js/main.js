import navComponente from "./nav.js"
import Banner from "./banner.js";

let Menus = ["Home","Produtos","Contato"]
let nav = new navComponente();

nav.CriarNovoMenu("barra_01",Menus)
nav.CriarBarraNavUsuario("barra_01","home")

let B =new Banner();
let BannerInfo = ["<h1>Compra rapida</h1> <br/> <h3>Compre games mais rápido...</h3>","<h1>Games do momento</h1> <br/> <h3>Lançamentos</h3>","<h1>Games em desconto</h1>"]
B.CriarBanner("banner_1")
B.ModificaBanner("banner_1",BannerInfo,0)

let BannerIndex = 0
setInterval(()=>{
    if(BannerIndex >= 2){
        BannerIndex = 0
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
    BannerIndex+=1

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
