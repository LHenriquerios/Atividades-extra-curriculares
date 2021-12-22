let stringToEqual = '';
sum = null;
bigger10 = '';
bigger20 = '';

const numbersToEqual = (a, b) => {

    return typeof a != "number" || typeof b != "number" ? ('Defina dois números') : operation(a,b);
    //fazendo a validação se os elementos recebidos são numéricos

    function operation(a, b) {
      a === b ? stringToEqual = 'são iguais' : stringToEqual = 'não são iguais';
      sum = a + b;
      sum > 10 ? bigger10 = 'maior' : bigger10 = 'não é maior';
      sum > 20 ? bigger20 = 'maior' : bigger20 = 'não é maior';
      return (`Os números ${a} e ${b} ${stringToEqual}. Sua soma é igual a ${sum}, que é ${bigger10} que 10 e ${bigger20} que 20`);
}
}

console.log(numbersToEqual(4, 4));
