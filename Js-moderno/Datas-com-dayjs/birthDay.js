// Importa a biblioteca dayjs, que é usada para manipulação e formatação de datas
const dayjs = require("dayjs")

function birthday(date){
    // Converte a string 'date' passada como argumento em um objeto dayjs chamado 'birthday'
    const birthday = dayjs(date)

    // Cria um objeto dayjs representando a data e hora atuais e o armazena em 'today'
    const today = dayjs()

    // Calcula a diferença em anos entre a data atual e a data de nascimento, que é a idade da pessoa com .diff
    const ageInYears = today.diff(birthday, 'year')

    // Calcula a data do próximo aniversário, adicionando um ano à idade atual para a data de nascimento com .add
    const nextBirthday = birthday.add(ageInYears + 1, 'year')

    // Calcula a diferença em dias entre a data atual e a data do próximo aniversário
    // Adiciona 1 para contar o dia do próximo aniversário
    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1
  
    
    console.log(`Idade: ${ageInYears}`)
    // Exibe a data do próximo aniversário no formato DD/MM/YYYY
    console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday("2005-07-10")