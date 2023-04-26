
// comparadores


/*const PrimeiroNumero = 10
const SegundoNumero = 20
console.log(PrimeiroNumero === SegundoNumero)
console.log(PrimeiroNumero !== SegundoNumero)
console.log(PrimeiroNumero > SegundoNumero)
console.log(PrimeiroNumero >= SegundoNumero)
console.log(PrimeiroNumero < SegundoNumero)
console.log(PrimeiroNumero <= SegundoNumero)*/

//Atividade operador lógico

const nome = prompt("Digite seu nome")
const idade = Number(prompt("digite sua idade"))
const MaiordeIdade = idade > 18 
const idadeEm2050 = (2050 - new Date().getFullYear()) + idade; 

console.log("nome",nome); 
console.log("idade",idade);
console.log ("é maior de idade!", MaiordeIdade)
console.log("idade em 2050",idadeEm2050)



