function sum(){
    let arr = Array.from(arguments)
    let soma = arr.reduce((a, b) => {
        return a + b;
    })
    return soma
}

let arr = [1,2,3,4,5]
let soma = sum(1,2,3,4,5)
let soma1 = sum(...arr)

function media(){
    let arr = Array.from(arguments)
    let soma = sum(...arr);
    return arguments.length > 0 ? soma / arguments.length : 0;
}