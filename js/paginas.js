import card from "./cards.js"
import Produto from "./produtos.js"
class paginas{
    PaginaPrincipal = document.getElementById("pagina")
    cards = new card()
    PaginaDeProdutos(){ 
        this.InserirConteudo("<div id= 'VitrineProdutos'></div>")
        this.cards.CriarCards("VitrineProdutos","playstation","Jogos em promoção")
        this.cards.CriarCards("VitrineProdutos","hd xbox","Produto importado")
        document.getElementsByClassName("card")[0].id = "play_prod"
        document.getElementsByClassName("card")[1].id = "play_prod"
        let produto_1 = document.getElementById("VitrineProdutos")
        produto_1.addEventListener("click",this.PaginaDeProdutos_xbox)
    }

PaginaDeProdutos_xbox(){
    let prod = new Produto()
    prod.PaginaDeProdutos_xbox("jogoxbox_1","./img/Jogo Xbox Star wars.jfif","Star wars Jedi","R$160,00","7.5")
    
}
PaginaDeProdutos_xbox(){
    let prod = new Produto()
    
}


    
    
        
    

    
    


    InserirConteudo(Conteudo){
        this.PaginaPrincipal.innerHTML+=Conteudo
    }
}

export default paginas