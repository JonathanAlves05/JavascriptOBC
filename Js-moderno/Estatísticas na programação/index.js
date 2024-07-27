//Função da média simples
const average = (...numbers) => {
    // Usa o método reduce para somar todos os números passados como argumento
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    // Divide a soma pelo número total de elementos para calcular a média
    return sum / numbers.length
}
// Chama a função average com quatro números e exibe o resultado
console.log(`Média aritmética simples: ${average(3, 6, 10, 9)}`)

//Função da média ponderada 
const weightedAverage = (...entries) => {
    // Usa o método reduce para calcular a soma ponderada dos números
    const sum = entries.reduce((accum, { number, weight}) => accum + (number * (weight ?? 1)), 0)
    // Calcula a soma dos pesos
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    // Divide a soma ponderada pela soma dos pesos para calcular a média ponderada
    return sum / weightSum 
}
// Chama a função weightedAverage com três objetos e exibe o resultado
console.log(`Média Ponderada: ${weightedAverage (
    {number: 9, weight: 3},
    {number: 7},
    {number: 10, weight: 1},

)}`)

//Função da Mediana 
const median = (...numbers) => {
    // Ordena os números em ordem crescente
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    // Calcula o índice do meio da lista ordenada
    const middle = Math.floor(orderedNumbers.length / 2)
    // Se o número de elementos for ímpar, retorna o elemento do meio
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }
    // Se o número de elementos for par, calcula a média dos dois elementos do meio
    const  firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return average (firstMedian, secondMedian)
}
// Chama a função median com uma lista de números e exibe o resultado
console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

//Função da Moda
const mode = (...numbers) => {
    // Cria um array de arrays com cada número e sua contagem de ocorrências
    // [[n, qtd], [n, qtd], [n, qtd] ]
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    // Ordena os arrays pela contagem de ocorrências em ordem decrescente
    quantities.sort((a, b) => b[1] - a[1])
    // Retorna o número com a maior contagem de ocorrências (a moda)
    return quantities [0][0]
}

console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)