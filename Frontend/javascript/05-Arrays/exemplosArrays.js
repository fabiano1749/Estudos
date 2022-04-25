
/*
const arr = [] -> Sintaxe literal
const arr = new Array() -> Sintaxe construtora

*/


/*every -> Cada

    const arr = [1, 3, 5, 'Bruce', false]
    
    let apenasNumero = arr.every(function(el){
        return !isNaN(el)
    })

    Poderia usar uma arrowFunction tambem
    let apenasNumero = arr.every((el) => {
        return typeof el === 'number'
    })

    Se todos os elemento do array forem números será retornado true.

    A funão every aplica uma função de callback booleana em cada um dos elementos do array e retorna true caso
    a aplicação do callback em cada um elemento seja true e se o callback resultar em false para pelo menos um elemento do array
    o retorno de every será false. 

*/


/*some -> algum
    let arr = [1, 3, 5, 'Bruce', false]
     let apenasNumero = arr.some((el) => {
        return typeof el === 'number'
    })

    Se houver pelo menos um número no array será retornado true.

*/

/*filter -> Não altera o array original
    A função de callback pode receber 3 parâmetros: 1) o elemento 2) o indice 3) o array original
    
     let arr = [1, 3, 5, 'Bruce', false]
     let arr1 = arr.filter( (elemento, indice, arrayOriginal) => {
        return typeof elemento === 'number'
     })

     retorna um array com todos os elemento que são números. 


*/

/*forEach -> Não retorna nada. Apenas itera sobre os elementos do array
             A função de callback pode receber 3 parâmetros: 1) o elemento 2) o indice 3) o array original
    
     let arr = [1, 2, 3, 4, 5]
     
      arr.forEach((elemento, indice, arrayOriginal) => {
        arrayOriginal[indice] = elemento * elemento      
     })

     Itera no arry e muda todos os elemento do array original 
*/

/*map -> Itera sobre os elementos do array e retorna uma nova array com os elementos retornados pela função de callback.
         O array original permanece inalterado. A menos que ele seja alterado explicitamente na função de callback.       
         A função de callback pode receber 3 parâmetros: 1) o elemento 2) o indice 3) o array original
    
     let arr = [1, 2, 3, 4, 5]
     
      arr.map((elemento, indice, arrayOriginal) => {
        return elemento * elemento      
     }) 
*/

/*reduce => Itera no array e retorna um único valor
     let arr = [1, 2, 3, 4, 5, 6, 7, 8]
    let soma = arr.reduce((acumulador, atual) => {
        return acumulador + atual
    })

    Primeira iteração:
        acumulador será : 1
        atual será : 2
    Segunda iteração:
        acumulador será : O valor retornado anteriormente: 1 + 2 = 3
        atual será : O próximo elemento do array: 4
    Terceira iteração:
        acumulador será : O valor retornado anteriormente: 4 + 3 = 7
        atual será : O próximo elemento do array: 5

    ** É possível passar uma semente(valor inicial) e nesse caso, na primeira iteração
       o acumulador será o valor inicial e o atual será o primeiro elemento do array;    

       let soma = arr.reduce((acumulador, atual) => {
        return acumulador + atual
    }, 0)

     Primeira iteração:
        acumulador será : 0
        atual será : 1
    Segunda iteração:
        acumulador será : O valor retornado anteriormente: 0 + 1 = 1
        atual será : O próximo elemento do array: 2
    Terceira iteração:
        acumulador será : O valor retornado anteriormente: 1 + 2 = 3
        atual será : O próximo elemento do array: 3

    ** É possível passar ainda na função de callback o índice e o array original. 
    
    Exemplo: Contar nomes com mesmas iniciais.
    let arrayNomes = ["Fabiano", "Maria", "Joana", "Mario"]
    letObj = arrayNomes.reduce((obj, nome) => {
        let inicial = nome[0];
        if(obj[inicial]){ // Testa se no objeto há uma propriedade chamada incial
            obj[inicial] ++
        }
        else{
            obj[inicial] = 1
        }
        return obj
    }, {})



/*indexOf =>  Se o elemento estiver presente no array será retornado o primeiro índice de sua ocorrência ou -1 se ele não estiver presente.
     let arr = [1, 2, 3, 4, 5, 3]
     let index = arr.indexOf(3)
     O retorno será 2
*/

/*lastIndexOf =>  Se o elemento estiver presente no array será retornado o último índice de sua ocorrência ou -1 se ele não estiver presente.
     let arr = [1, 2, 3, 4, 5, 3]
     let index = arr.lastIndexOf(3)
     O retorno será 5
*/

/*includes =>  Retorna true se o elemento estiver presente no array.
     let arr = [1, 2, 3, 4, 5, 3]
     let presente = arr.includes(3)
     O retorno será true
*/

/*find =>  Retorna o primeiro elemento do array que sastisfaz a condição da função de callback.
            Se não encontrar nada será retornado undefined
     let arr = [1, 2, 3, -5, 5, 3]
     let primeiro = arr.find((elemento) => {
         return elemento > 3
     })
     O retorno será 5
*/

/*findIndex =>  Retorna o index do primeiro elemento do array que sastisfaz a condição da função de callback.
            Se não encontrar nada será retornado undefined
     let arr = [1, 2, 3, -5, 5, 3]
     let primeiroIndex = arr.find((elemento) => {
         return elemento > 3
     })
     O retorno será 4
*/

/*concat, toString, join
           
     let arr1 = [1, 2, 3]
     let arr2 = [5, 6, 7]
     console.log(arr1.toString()) => Será impresso a string "1,2,3"
     console.log(arr1.join(";")) => Será impresso a string "1;2;3"
     let arr3 = arr1.concat(arr2) => Será criado um novo array com os elementos do arra1 seguidos pelos elementos do arr2

     O método concat pode ser usado para fazer clones de arrays
     let arr4 = [].concat(arr1);
     Dessa forma mudanças feitas no array4 não afetarão os elementos do arr1
*/

/*push, pop, shift, unshift, slice
    
    let arr = [1, 2, 3, 7]

     arr.push(5) => Adiciona o elemento no fim do arr.
     arr.pop() => Remove e retorna o ultimo elemento do arr.
     arr.shift() => remove e retorna o primeiro elemento do arr.
     arr.unshift(3) => Adiciona o elemento no inicio do arr.
     arr1 = arr.slice(2, 3) => retorna um sub array
     //arr1 = arr.slice(IncluiElementoDoIndice, NãoIncluiElementoDoIndice) 
      arr1 = arr.slice(2) => retorna um sub array com todos elementos a partir do incide 2 inclusive
*/

/*splice  => Remove e retorna um sub-array do array original. 
             Esse método modifica o array original
             
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]
    
    let removido = arr.splice(2, 5)
    A partir do indice 2 (inclusive) serão removidos 5 elementos do arr
    let removido = arr.splice(2)
    A partir do indice 2 (inclusive) serão removidos todos os elementos do arr

    ** É possível remover e acrescentar elementos ao mesmo tempo
    let removido = arr.splice(2, 5, 3, 6, 7)
    A partir do indice 2 serão excluídos 5 elementos e serão incluídos os elementos 3, 6, e 7
*/

/*reverse
     let arr = [1, 2, 3, 4, 5, 6, 7, 8]
     arr.reverse() => inverte a ordem dos valores do array original - Altera o array original
*/


/*ArrayOf
     let arr = new Array(3) // Cria um array com 3 posições.
     let arr = Array.of(3) // Cria um array com uma posição e coloca o número 3 nessa posição.
*/

/*ArrayFrom  Permite criar um array a partir de uma NodeList, HTMLCollection , ...
    let nodeList = document.querySelectorAll('p')
    let arr = Array.From(nodeList) 
    Agora é possível usar todos os métodos de array nos elementos de nodeList
    let arr = [...nodeList] // Também retorna um array a partir de um nodeList  

*/

/*spread operator: Serve para extrair os elementos de um array +-
     let arr = [1, 2, 3, 4]
     sum(...arr) é a mesma coisa de chamar a função sum(1, 2, 3, 4)

     Outro exemplo: 
     let arr1 = [5, 5, 6]
     arr.push(...arr1) // Ao invés de adicionar um array na ultima posição, cada um dos elementos do arr1 será adicionado em arr
*/

/*destructuring : Serve para passar valores de um array para variáveis
     let arr = [1, 2, 3, 4]
     let [a, b] = arr -> Foram criadas duas variáveis a = 1 e b = 2
     let [a, ...b] = arr -> Foram criadas duas variáveis a = 1 e b = [2,3,4]
     let [a, ,b] = arr -> Foram criadas duas variáveis a = 1 e b = 3
*/

/* Iteração em arrays               

    //Iteração convencional em arrays
    for (let i = 0; i< arr3.length; i++) {
        console.log(arr3[i])    
        }

    //Iteração concisa em arrays: i recebe cada um dos indices do array em cada iteração
    //Tambem serve para iterar em objetos. No caso o i seria o nome de cada uma das propriedades do objeto
    for(i in arr) {
        console.log(arr3[i])
    }

    //Iteração concisa em arrays: i recebe cada um dos valores do array em cada iteração
    for (i of arr) {
        console.log(i)
    }

    //Iteração funcional em arrays: i recebe cada um dos valores do array em cada iteração
    arr.forEach(i => console.log(i))
*/









