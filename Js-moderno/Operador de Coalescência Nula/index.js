//O operador de coalescência nula (??) é um recurso do JavaScript que retorna o lado direito 
// do operador quando o valor do lado esquerdo é null ou undefined.

let a = 0

let b = a || 42

console.log({ a, b })

b = a ?? 42

console.log({a, b})

let c = false ?? 42

console.log({c})

//O operador de coalescência nula é útil quando você deseja fornecer valores padrão para variáveis que podem ser
// null ou undefined, mas quer preservar outros valores "falsy" como 0, false, ou "".