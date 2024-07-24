//Array de Strings
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
//O operador Spread(...) separou cada um dos elementos
console.log(...towns)
//Aplicou o Spread apenas apenas no primeiro indice, separando as letras
console.log(...towns[0])

const townsCopy = towns
//Método pop remove o ultimo elemento do array
townsCopy.pop()
townsCopy.pop()
//Método push adicionou uma nova String ao array
townsCopy.push('Juno')

console.log({ towns, townsCopy })

//Criando um novo array para que as modificações fiquem salva apenas neles
const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone })

const townsObj = { ...towns }
const townsObjClone = { ...townsObj }
//Alterando apenas o objeto Cloness
townsObjClone.test = 'Test'

console.log({ townsObj, townsObjClone })