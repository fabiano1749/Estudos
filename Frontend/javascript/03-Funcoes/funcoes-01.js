/*
São objetos que podem ser invocados / Executados
São objetos de primeira classe e por isso:
    Podem se passadas como parametro para outras funções(callback)
    Podem ser atribuidas em propriedades de objetos(Método)
    Podem ser retornadas como resultado de outra função
    Por serem objetos, podem ter suas próprias propriedades 

Funções auto invocáveis evitam a poluição do escopo global pois geram um escopo isolado.
*/


//Arguments: É um objeto parecido com um Array que armazena os parâmetros que a função recebeu em cada chamada. Neste caso a função soma vai funcionar com 1, 2, 3 ... parâmetros
//Não pode ser usado em arrowFunctions
function soma(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

function soma2(){
    let total = 0;
    for(i in arguments){
        total += arguments[i];
    }
    return total;
}

//Função sendo passada como parâmetro
function f1(f){
    console.log('Executar função de callback')
    console.log(typeof f)
    typeof f === 'function' && f();
}

f1(function(){console.log('Função passada como parâmetro')})

//Retornando uma função
function f2(n1){
    return function (n2){
        return n1 * n2;
    }
}
// returnF2 recebe a função retornada por f2
const returnF2 = f2(5)
console.log(returnF2(4))


//É possível colocar propriedades em funções, afinal funções são objetos em javascript
function f3(){
    f3.count++
    console.log(`Olá, eu fui executada ${f3.count} vezes`)
}
f3.count = 0;
f3()