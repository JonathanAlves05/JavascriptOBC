import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleClear, handleTyping } from "./keyHandlers.js"
import switchTheme from "./themeSwitcher.js"

//Adicionando eventos de click a todos os botões de caracteres
document.querySelectorAll(".charKey").forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', handleButtonPress)
})
//Criando evento no botão C para limpar 
document.getElementById('clear').addEventListener('click', handleClear )
//Adiciona evento de pressionar tecla ao campo de entrada 
input.addEventListener('keydown', handleTyping)

//Adiciona evento de clique ao botão de igual e recebe a função de calcular
document.getElementById("equal").addEventListener('click', calculate)


//Adiciona botão de clique para copiar o resultado pára area de transferencia
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)

//Evento de clique para alterar os temas
document.getElementById("themeSwitcher").addEventListener('click', switchTheme)