//Recebendo o input do HTML pelo id
const input = document.getElementById('input')

//Criando evento de click para alterar o valor do 'value'
document.getElementById('value').addEventListener('click', function (){
    input.value = "Olá, mundo!"
    console.log(input.value)
    console.log(input.getAttribute ('value'))

})

//Criando evento de click para alterar o valor de 'type'
document.getElementById('type').addEventListener('click', function(){
    //input.type = input.type !== 'date' ? 'date' : 'text'
    input.setAttribute('type', 'radio')
})

//Criando evento de click para alterar placeholder 
document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digita algo...'
})

//Criando evento de click para desabilitar o input
document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)

})

//Criando evento de click para manipular atributo data
document.getElementById('data').addEventListener('click', function(){
    //dataset é um objeto que recebe todos os atributos data
    //Adapta os atributos em HTML com Camel case para o Js
    //something é 'qualquer coisa' em inglês
    //Recebe o valor data 
    const data = input.dataset.somethingElse
    console.log("O valor do atributo data-something-else é: " + data)
    //Altera o valor data
    input.dataset.somethingElse = "Algum outro valor"
    console.log("O valor do atributo data-something-else agora é: " + input.dataset.somethingElse)
})