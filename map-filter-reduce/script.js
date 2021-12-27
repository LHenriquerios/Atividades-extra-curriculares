//map com this
const array = [12, 54, 23, 22, 47, 85];
const apple = { value: 2, }
const orange = { value: 3, }

function mapComThis (arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

console.log('this -> apple' ,mapComThis(array, apple));
console.log('this -> orange' ,mapComThis(array, orange));

//map sem this
function mapSemThis (arr) {
    return arr.map((item) => item * 5 )
}
console.log('Map sem This ->', mapSemThis(array));

//filter
function filtraPares (arr) {
    return arr.filter((item) => item % 2 !== 0)
}
console.log('Mostrando os números ímpares com Filter ->', filtraPares(array));

//reduce: exemplo 1
function somaNumeros (arr){
    return arr.reduce ((prev, crr) => {
        console.log({ prev });
        console.log({ crr });
       return prev + crr
    })
}
console.log('Somando os valores do array com reduce', somaNumeros(array));

//reduce: exemplo 2
const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'toalha',
        preco: 25,
    },
    {
        name: 'cereal',
        preco: 12,
    },
]
const saldoDisponivel = 100;

function calculaSaldo (saldoDisponivel, lista) {
    return lista.reduce((prev, crr, index) => {
        console.log('rodada: ', index + 1);
        console.log({ prev });
        console.log({ crr });
        return prev - crr.preco;
    }, saldoDisponivel);
};

console.log(calculaSaldo(saldoDisponivel, lista));