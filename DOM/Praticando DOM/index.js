// Função para adicionar um novo contato à lista
function addContact(){
    // Obtém a seção onde os contatos serão listados
    const contactSection = document.getElementById('contacts-list')
    // Cria um elemento <h3> para o título do contato
    const h3 = document.createElement('h3')
    // Define o texto do título do contato
    h3.innerText = "Contato" 

    // Cria um elemento <ul> para a lista de informações do contato
    const ul = document.createElement('ul')

    // Cria um item de lista para o nome do contato
    const nameLi = document.createElement('li')
    // Define o texto do item de lista para o nome
    nameLi.innerText = "Nome: "
    // Cria um input para o nome do contato
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
    // Adiciona o item de lista à lista não ordenada
    ul.appendChild(nameLi)
    // Adiciona uma quebra de linha à lista
    ul.appendChild(document.createElement('br'))
    
    const phoneLi = document.createElement('li')
    phoneLi.innerText = "Telefone: "
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="adress">Endereço: </label>'   
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'phone'
    addressInput.id = 'address'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    // Adiciona o título e a lista à seção de contatos
    contactSection.append(h3, ul)

}
// Função para remover o último contato da lista
function removeContact(){
    // Obtém a seção onde os contatos são listados
    const contactSection = document.getElementById('contacts-list')

    // Obtém todos os elementos <h3> (títulos de contato) na seção
    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    // Remove o último título de contato da seção
    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])

}