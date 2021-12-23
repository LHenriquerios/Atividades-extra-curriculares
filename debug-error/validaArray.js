function validaArray (arr, num) {

    try{
        if (!arr && !num) throw new ReferenceError('Envie uma lista e um número');
        if (typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo Objeto');
        if (typeof num !== 'number') throw new TypeError('Precisa ser um número');
        if (arr.length !== num) throw new RangeError('Tamanho Inválido!');
        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log('Este Erro é um ReferenceError!');
            console.log(e.message);
        }
        else if(e instanceof TypeError){
            console.log('Este Erro é um TypeError!');
            console.log(e.message);
        }
        else if(e instanceof RangeError){
            console.log('Este Erro é um RangeError!');
            console.log(e.message);
        }
        else{
            console.log('Tipo de Erro não esperado' + e);
        }
    }
}

console.log(validaArray([1, 2, 3], 12));
