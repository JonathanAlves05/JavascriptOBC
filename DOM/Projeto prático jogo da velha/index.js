//Criando variáveis globais úteis
const boardRegions = document.querySelectorAll('#gameBoard span') //Recebe todos os spans
let vBoard = []
let turnPlayer = ''

//Função para mostrar o jogador da vez
function updateTitle(){
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value //Recebe o nome digitado no input
}

//Função do botão de inicializar o jogo
function initializeGame(){
    //Inicializa as variáveis globais
    vBoard = [['','',''], ['','',''], ['','','']] //Criando um array bidimensional
    turnPlayer = 'player1' // Define o jogador principal

    //Ajusta o título da página (caso seja necessário)
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>' // Atualiza o titulo h2
    updateTitle() //Chama a função para atualizar o titulo com o nome do jogador

    //Limpa o tabuleiro (caso seja necessário) e adiciona os eventos de clique
    boardRegions.forEach(function (element){
        element.classList.remove('win') //Remove a classe de vitória
        element.innerText = '' //Limpa o texto
        element.classList.add('cursor-pointer') //Adiciona classe para indicar que a região é clicavel
        element.addEventListener('click', handleBoardClick) 
    })
}
//Verifica se existem três regiões iguais em sêquencia e devolve as regiões
function getWinRegions(){
    const winRegions = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
        winRegions.push("0.0", "0.1", "0.2")
      if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
        winRegions.push("1.0", "1.1", "1.2")
      if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
        winRegions.push("2.0", "2.1", "2.2")
      if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
        winRegions.push("0.0", "1.0", "2.0")
      if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
        winRegions.push("0.1", "1.1", "2.1")
      if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
        winRegions.push("0.2", "1.2", "2.2")
      if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
        winRegions.push("0.0", "1.1", "2.2")
      if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
        winRegions.push("0.2", "1.1", "2.0")
      return winRegions
}

//Desabilita uma região do tabuleiro para que não seja mais clicável
function disableRegion(element){
    element.classList.remove('cursor-pointer')
    element.removeEventListener('click', handleBoardClick)
}
//Pinta as regiões onde o jogador venceu e mostra seu nome na tela
function handleWin(regions){
    regions.forEach(function(region){
        document.querySelector('[data-region="' + region + '"]').classList.add('win')
    })
    const playerName = document.getElementById(turnPlayer).value
    document.querySelector('h2').innerHTML = playerName + ' venceu!'
}

//Função de clique do jogo
function handleBoardClick(ev){
    //Obtém os índices da região clicada
    const span = ev.currentTarget
    const region = span.dataset.region //N.N
    const rowColumnPair = region.split ('.')// ["N", "N"] Método split divide string transformando ela em array
    const row = rowColumnPair[0] //Recebe a linha
    const column = rowColumnPair[1] //Recebe a coluna

    //Marca a região citada com o símbolo do jogador
    if (turnPlayer === 'player1') {
      span.innerText = 'X'
      vBoard[row] [column] = 'X'
    } else {
      span.innerText = 'O'
      vBoard[row][column] = 'O'
    }
    //Limpa o console e exibe o nosso tabuleiro virtual
    console.clear()
    console.table(vBoard)
    //Desabilita a região clicada
    disableRegion(span)
    // Verifica se alguém venceu
    const winRegions = getWinRegions()
    if (winRegions.length > 0) {
      handleWin(winRegions)
       } else if (vBoard.flat().includes('')) { //Método flat transforma o array bidimensional em um único array
        turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
        updateTitle()
       } else {
        document.querySelector('h2').innerHTML = 'Empate!'
      }
    }
    // Adiciona o evento no botão que inicia o jogo
    document.getElementById('start').addEventListener('click', initializeGame)

