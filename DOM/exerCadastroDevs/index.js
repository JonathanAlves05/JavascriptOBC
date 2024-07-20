
//Função para criar e retornar um elemento label com texto e htmlFor especificados
function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text 
    return label
}

//Função para criar e retornar um elemento input com id, valor, nome, tipo e placeholder
function createInput(id, value, name, type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

// Recebe o botão de adicionar e o formulário pelo id
const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
//Array para armazenar os Devs cadastrados
const developers = []
//Variavel para contar as linhas cadastradas
let inputRows = 0

// Adiciona um evento de clique no botão de adicionar tecnologia
addTechBtn.addEventListener('click', function(ev){
    //Recebe o elemento ul que conterá as novas linhas de entrada
    const stackInputs = document.getElementById('stackInputs')

    
    const newRow = document.createElement('li') //Cria um novo elemento li
    const rowIndex = inputRows //Armazena o índice da linha atual
    inputRows++ //incrementa o contador de linhas
    newRow.id = 'inputRow-' + rowIndex //Define o id da nova linha de entrada
    newRow.className = 'inputRow' //Define a classe da nova linha de entrada

    //Cria e adiciona os elementos label e input para o nome da tecnologia
    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-'+ rowIndex, null, 'techName')

    //Cria e adiciona os elementos label e input para a experiência com a tecnologia
    const expLabel = createLabel('Experiência:  ')
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput (id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1) 
    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput (id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel ('3-4 anos', id2)
    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput (id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel ('5+ anos', id3 )

    //Cria e adiciona o botão de remover linha
    removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'remover'
    removeRowBtn.addEventListener('click', function(){
            stackInputs.removeChild(newRow) //remove a linha quando o botão é clicado
    }) 

    //Adiciona todos os elementos criados à nova linha
    newRow.append(
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1,
         expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
    )
    //Adiciona a nova linha ao elemento ul
    stackInputs.appendChild(newRow)
})

//Adiciona um evento de submit no formulário
form.addEventListener('submit', function (ev){
        ev.preventDefault() //Retira o comportamento padrão de atualizar do formulário
        //Recebe o nome completo e todas as linhas de entradas adicionadas
        const fullnameInput = document.getElementById('fullname')
        const inputRows = document.querySelectorAll('.inputRow')

        let technologies = [] //Array para armazenar as tecnologias e experiências
        inputRows.forEach(function(row){
            //Para cada linha de entrada, recebe os valores dos iputs das tecnologias e experiencias
            const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
            const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
            technologies.push({name: techName, exp: techExp }) //Recebe as tecnologias e expêriencias no array

        })

        //Cria um objeto com o nome completo e as tecnologias 
        const newDev = {fullname: fullnameInput.value, technologies: technologies }
        developers.push(newDev)//Adiciona o novo desenvolvedor ao array de desenvolvedores
        alert('Dev cadastrado com sucesso!')

        fullnameInput.value = '' //limpa o imput de nome completo
        inputRows.forEach(function(row){
            row.remove() //remove todas as linhas de entradas adicionadas
        })
        console.log(developers) //Exibe todos os desenvolvedores cadastrados no console
})