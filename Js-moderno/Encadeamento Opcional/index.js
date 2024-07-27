const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }
  // Isto lançará um erro se `friends` estiver vazio:
  // console.log(user.friends[0].phone.ddd)

  // Isto não lançará um erro, apenas retornará `undefined`
  console.log(user.friends[0].phone?.ddd)
  console.log(user?.brothers?.length)
  
  console.log(user.brothers?.[5].name)
// O encadeamento opcional é uma forma segura de acessar propriedades de objetos aninhados.
// Evita erros que ocorrem quando tentamos acessar propriedades de undefined ou null.
// Retorna undefined se qualquer parte do caminho não existir, ao invés de lançar um erro.