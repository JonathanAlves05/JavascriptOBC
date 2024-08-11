import calculate from "./calculate.js"

const input = document.querySelector("#input")

export function handleButtonPress(ev){
    //Utilizando o dataset pois é possivel pegar todos os elementos data
    const value = ev.currentTarget.dataset.value
    input.value += value //Adiciona o valor do botão ao campo de entrada
}

export function handleClear (){
    input.value = '' //Limpa o campo de entrada
    input.focus() //Foca no campo de entrada
}

export function handleTyping(ev){
    ev.preventDefault() //previne o comportamento padrão
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key //Adiciona a tecla ao campo de entrada se for permitida
        return
    }
    if (ev.key === "Backspace"){
        input.value = input.value.slice(0, -1) //Remove o ultimo campo de entrada 
    }
    if (ev.key === "Enter") {
        calculate() //Chama a função de calculo se a tecla pressionada for enter
    }
}