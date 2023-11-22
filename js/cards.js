    class card{
        _TipoDeCard = "card"
        CriarCards(IdAlvo,Título,Conteúdo){
            let Elemento = document.getElementById(IdAlvo)
            Elemento.innerHTML+="<div class =' "+this._TipoDeCard+"' "+
            "<h1>"+Título+"</h1><h4>"+Conteúdo+"</h4> </div>"
        
        }
        EscolherTipo(Tipo){
            this._TipoDeCard = Tipo
        }


    }

    export default card