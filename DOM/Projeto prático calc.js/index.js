//Seleciona elementos do HTML pelo DOM e armazena em variávies
//Usando query selector para pegar elementos do CSS
const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//Adicionando eventos de click a todos os botões de caracteres
document.querySelectorAll(".charKey").forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        //Utilizando o dataset pois é possivel pegar todos os elementos data
        const value = charKeyBtn.dataset.value
        input.value += value //Adiciona o valor do botão ao campo de entrada
    })
})
//Criando evento no botão C para limpar 
document.getElementById('clear').addEventListener('click', function(){
    input.value = '' //Limpa o campo de entrada
    input.focus() //Foca no campo de entrada
})
//Adiciona evento de pressionar tecla ao campo de entrada 
input.addEventListener('keydown', function (ev){
    ev.preventDefault() //previne o comportamento padrão
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
})

//Adiciona evento de clique ao botão de igual e recebe a função de calcular
document.getElementById("equal").addEventListener('click', calculate)

function calculate () {
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove("error")
}
//Adiciona botão de clique para copiar o resultado pára area de transferencia
document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget
    if (button.innerText === "Copy") {
        button.innerText = "Copied!"
        button.classList.add("Sucess")
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = "Copy"
        button.classList.remove("sucess")

    }
})
//Evento de clique para alterar os temas
document.getElementById("themeSwitcher").addEventListener('click', function(){
    //Verifica o tema atual e muda 
    if (main.dataset.theme === "dark"){
        
        root.style.setProperty("--bg-color", "#84A7A1")
        root.style.setProperty("--border-color", "#000000")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#0B60B0")
        root.style.setProperty("--card-color", "#40A2D8")

        main.dataset.theme = "light"
    } else {
        

        root.style.setProperty("--bg-color", "#000000")
        root.style.setProperty("--border-color", "white")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#40A2D8")
        root.style.setProperty("--card-color", "#0B60B0")
        
        main.dataset.theme = "dark"
    }
})