//Função para adicionar jogador
function addPlayer() {

    // Obtém o valor dos campos de entrada para posição, nome e número do jogador
    const position = document.getElementById("position").value
    const name = document.getElementById("name").value
    const number = document.getElementById("number").value

    // Exibe um prompt de confirmação para escalar o jogador
    const confirmation = confirm("Escalar " + name + " como " + position + "?")

    // Se o usuário confirmar a escalada do jogador
    if (confirmation) {

        // Obtém a lista de equipe
        const teamList = document.getElementById("team-list")
        // Cria um novo item de lista para o jogador
        const playerItem = document.createElement("li")
        // Define o ID do item de lista com base no número do jogador
        playerItem.id = "player-" + number
        // Define o texto do item de lista com a posição, nome e número do jogador
        playerItem.innerText = position + ": " + name + " (" + number + ")"
        // Adiciona o item de lista à lista de equipe
        teamList.appendChild(playerItem)

        // Limpa os campos de entrada após adicionar o jogador
        document.getElementById("position").value = ""
        document.getElementById("name").value = ""
        document.getElementById("number").value = "" 
    }
}

//função de remover jogador
function removePlayer(){

    // Obtém o número do jogador a ser removido
    const number = document.getElementById("numberToRemove").value
    // Obtém o elemento do jogador a ser removido com base no número
    const playerToRemove = document.getElementById("player-" + number)
    // Exibe um prompt de confirmação para remover o jogador
    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")

    if (confirmation) {
        // Remove o jogador da lista de equipe
        document.getElementById("team-list").removeChild(playerToRemove)
        // Limpa o campo de entrada do número do jogador a ser removido
        document.getElementById("numberToRemove").value = ""

    }
}