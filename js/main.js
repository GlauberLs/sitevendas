import navComponente from "./nav.js"
import Banner from "./banner.js";

let Menus = ["Home","Produtos","Contato"]
let nav = new navComponente();

nav.CriarNovoMenu("barra_01",Menus)
nav.CriarBarraNavUsuario("barra_01","home")

let B =new Banner();
B.CriarBanner("banner_1","<h1>Compra rapida</h1> <br/> <h3>Compre games mais rápido...</h3>")