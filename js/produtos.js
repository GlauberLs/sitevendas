
class Produto{
    PaginaDeProdutos_xbox(ProdutoId,ImagemProduto,NomeProduto,PreçoProduto,Nota,DescProduto){
            document.getElementsByClassName("localnav")[0].innerHTML = "<h4>produto/ xbox</h4>"
    
         document.getElementById("pagina").innerHTML = ""
         document.getElementById("pagina").innerHTML+="<div id='"+ProdutoId+"_01' class ='produto'>"+
         "<article><img src='"+ImagemProduto+"'><h1>"+NomeProduto+"</h1>"+
         "<h3>"+PreçoProduto+"</h3></article>"+
         "</div>"
         document.getElementById(ProdutoId+"_01").innerHTML+="<div class='DescProdutos'></div>"
         document.getElementsByClassName("DescProdutos")[0].innerHTML+="<h1>Nota dos clientes:"+Nota+"</h1>"
         document.getElementsByClassName("DescProdutos")[0].innerHTML+="<h3>Descrição Produto:"+DescProduto+" </h3>"
    
        }
    
        
        
    }

export default Produto