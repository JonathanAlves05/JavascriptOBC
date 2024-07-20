// Função chamada 'register' que recebe um parâmetro 'element'
function register (element){
    //Pega os valores do HTML e armazena na variavel criada no js
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    // Verifica se a senha e a confirmação de senha são iguais
    if (password === passwordConfirmation) {
        alert("Usúario " + username + " registrado!")
    } else {
        alert("As senhas não conferem")
    }
}