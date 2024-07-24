//Desestruturando um Objeto
const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
  }

  const name = person.name //Forma comum
  
  const { job, parents } = person //Usando a forma desestruturada
  
  console.log(name, job, parents)
  
  //Desestruturando um array ; Quando um array é desestruturado ele segue uma ordem dos índices
  const [father, mother] = parents
  
  console.log(father, mother)
  
  //Desestruturando um objeto dentro dos parametros da função
  function createUser({ name, job, parents }) {
    // Math é um objeto global do Js que contém todas as operações matematicas ;
    // Método floor arredonda um número para baixo
    // Ramdom gera um número aleatorio entre 0 e 1
    const id = Math.floor(Math.random() * 9999)
    return {
      id,
      name,
      job,
      parents
    }
  }
  
  const luke = createUser(person)
  
  console.log(luke)