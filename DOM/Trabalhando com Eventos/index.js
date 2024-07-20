
// currentTarget é o elemento que o Event Listener está anexado.
// parentNode refere-se ao elemento pai na arvore DOM.
// children refere-se ao elemento filho na arvore DOM.
// Event Listener é uma função que aguarda um evento especifico do elemento e executa uma ação quando 
//esse evento ocorre.

//Função para receber valores do HTML e para verificar as senhas
function register(ev){
    console.log(ev)

    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation) {

        alert("Usúario " + username + " Registrado!")
        
    } else {
        alert("As senhas não conferem")
    }

}

//Função para remover o EventListener do Registrar
function removeEvent(){
    button.removeEventListener('click', register)
    alert("Event Removed")
}

// Obtém o botão de registro pelo ID
 const button = document.getElementById("register-button")
// Adiciona um event listener para o evento 'click' que chama a função 'register'
 button.addEventListener('click', register)

 // Adiciona um EventListener e após passar o mouse aparece o Target no console
 button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget)
 })