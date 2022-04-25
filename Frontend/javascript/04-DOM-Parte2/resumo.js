/* NodeList x HTMLCollection

    *NodeList
        *document.querySectorAll("Seletor") 
            *Retorna uma NodeList estática
            Exemplo: Se uma nodeList contem referência para todas a divs do html e o dom sofrer alteração 
            aumentando/diminuindo o numero de divs no nodeList não será atualizado.



    *HTMLCollection
        *document.getElementByTagName("nomeTag")
        *document.getElementByClassName("nomeClass")
            *Retorna uma HTMLCollection não estática
            Exemplo: Se uma HTMLCollection contem referência para todas a divs do html e o dom sofrer alteração 
            aumentando/diminuindo o numero de divs o HTMLCollection será atualizado.
            Ou seja o HTMLCollection reflete as mudanças que ocorrem no dom.


*/