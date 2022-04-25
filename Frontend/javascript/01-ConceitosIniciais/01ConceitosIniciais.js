/*
1) Constantes são imutáveis
2) Tipos primitivos são passados por valor.
3) 



*/

//Constantes devem ser criadas e iniciadas na mesma instrução. Não é possível atribuir outro valor para uma constante. 
const constante = 6
//constante = 7; -> Essa instrução resulta em erro, pois estou reatribuindo um valor a uma constante criada em outra instrução.

//O comando typeof retorna o tipo da variável
console.log(typeof constante);


//**CONVERSÃO IMPLICITA 
let n1 = '10';
let n2 = 2;

// O javascript vai fazer a conversão implicita, convertendo o '10' para 10 e depois ele fará a multiplicação: Resutado é 20
console.log(n1 * n2);

// O javascript irá concatenar a string '10' com a representação string do número 10.  Resutado será 102
console.log(n1 + n2);

//**CONVERSÃO EXPLICITA  -> parseInt(), parseFloat(), Number(), toString
console.log(parseInt(n1) + n2);

//Tanto o parseInt quanto o parseFloat só vão converter se os primeiros caracteres da string forem números, caso contrário o resultado será NaN
// A função construtora Number() só fará a conversção se a string a ser convertida for um número e retornará NaN quando a string não representar um número.

/* Operadores de comparação
    == Igualdade de valor
    === Igualdade de valor e tipo
    != valore diferentes
    !== valore e tipos diferentes
*/

/* falsy values 
    0, "", NaN, undefined, null, false
*/
if (0) {
    console.log(true);
} else {
    console.log(false);
}

/* Curto circuito
    A segunda expressão só será executada se a primeira for verdadeira
*/

let isValid = true;
isValid && console.log("Esse comando só executou porque a primeira expressão é verdadeira")

/* Break e Continue
    break -> Interrompe um loop. 
    continue -> Interrompe a iteração corrente e passa para a próxima iteração.
*/


/* 
    Funções
    Em javaScript funções são elementos de primeira ordem e podem ser atribuidas a variáveis,
    podem ser passadas como parâmetros de outras funções, podem ser retornadas etc.

    *Variáveis declaradas com var tem escopo de função.
        Essas variáveis serão visíveis em todo o escopo da função mesmo se elas tiverem sido
        declaradas em um bloco if ou for ... dentro da função.

    *Variáveis declaradas com let tem ecopo de bloco.
        Essas variáveis serão visíveis apenas no bloco em que foram declaradas.

    *Em javaScript é possível aninhar funções, ou seja, declarar uma função dentro de outra. 
    porem a função aninhada não pode ser chamada fora do escopo da função que a contém. 
*/

function f1() {
    document.write('Essa é a declaração de funcões')
}

const f2 = function () {
    document.write('Essa é a function expression')
}

const f3 = () => {
    document.write('Essa é a arrow function')
}

//Função aninhada
function principal() {
    document.write('Eu sou a função principal')
    function aninhada() {
        document.write('Eu sou uma função aninhada e só posso ser invocada no escopo de principal')
    }
    aninhada()
}

/* Arrays
   Não possuem tipo. Em um array podemos colocar elementos de tipos diferentes. 
*/

const arr = new Array()
arr[0] = 1
arr[1] = 'Bruce'
arr[2] = 10.9
const arr2 = new Array(1, 'fa', new Array(1, 2, 3))

//Sintaxe literal
const arr3 = [false, 4, 'Fabiano', [1, 2, 3, 4]]
arr3.push(56)

//Iteração convencional em arrays
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i])
}

//Iteração concisa em arrays: i recebe cada um dos indices do array em cada iteração
for (i in arr3) {
    console.log(arr3[i])
}

//Iteração concisa em arrays: i recebe cada um dos valores do array em cada iteração
for (i of arr3) {
    console.log(i)
}

//Iteração funcional em arrays: i recebe cada um dos valores do array em cada iteração
arr3.forEach(i => console.log(i))

/* Objetos
    
*/

//Sintaxe formal
const pessoa = new Object()
pessoa.nome = "Fabiano"
pessoa.idade = 36
//Acesso às propriedades do objeto
console.log(pessoa.idade);
//Acesso com o nome da propriedade do objeto
console.log(pessoa['nome']);

//Sintaxe literal - Mais utilizada
const pessoa2 = {
    nome: 'Buce',
    idade: 45,
    peso: '20 kg',
}

//Itera em um objeto - imprime os nomes das propriedades
for (let prop in pessoa2) {
    console.log(prop)
}

//Itera em um objeto - imprime os valores das propriedades
for (let prop in pessoa2) {
    console.log(prop + ": " + pessoa2[prop])
}

//Métodos em objeto
// Obs: Na função teste1 o this corresponde ao objeto produto, mais na função teste2, por
//      se tratar de uma arrow function o this é uma referência para o objeto window
const produto = {
    nome: 'Caneta',
    qtd: 29,
    comprar: function (n) {
        console.log(this)
        if (n > this.qtd) {
            return 'Quantidade não disponível!'
        }
        this.qtd -= n
    },
    teste1() {
        console.log('Teste 1')
        //O this aqui é uma referência ao objeto produto
        console.log(this)
    },
    teste2: () => {
        console.log('Teste 2')
        //O this aqui é uma referência ao objeto window
        console.log(this)
    }

}

/* Passagem por valor vs Passagem por referência
    Como a variável arr6 é uma objeto a função alteraArray vai receber uma referência dele
    e as alterações(inserções e deleções de elementos) que ocorrerem no corpo da função 
    vão afetar o array fora da função também, pos a e arr referenciam o mesmo objeto.    
*/

function alteraArray(a) {
    a.push('Adicionado')
}
let arr6 = [1]
alteraArray(arr6)
// Após essa chamada arr6 terá dois elementos: [1, "Adicionado"]

/* Criar numeros ramdomicos / Aleatórios
    O exemplo abaixo mostra que as vezes o while é a melhor alternativa de loop, principalmenten quando não 
    sabemos o número de iterações que será necessário para realizar a tarefa. 
*/
function geraAleatorio(max) {
    return parseInt(Math.random() * max);
}

let jogoMega = []
while (jogoMega.length < 7) {
    let num = geraAleatorio(60)
    if (!jogoMega.includes(num)) {
        jogoMega.push(num);
    }
}
console.log(jogoMega);

function geraJogoMega() {
    let jogoMega = []
    while (jogoMega.length < 8) {
        let num = geraAleatorio(60)
        if (!jogoMega.includes(num)) {
            jogoMega.push(num);
        }
    }

    jogoMega.map( (elemento, indice, jogoMega) => {
        jogoMega[indice] = (elemento + 36) % 60      
     })
    jogoMega.sort(function(a, b) {return a - b;});
    console.log(jogoMega);
}    

function geraJogosMega(quantJogos) {
    for(i = 0; i < quantJogos; i++){
        geraJogoMega();
    }
} 





