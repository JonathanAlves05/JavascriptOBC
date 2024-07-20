    //Recebendo o form através do id
    const form = document.getElementById("orderForm")

    //Criando evento para o submit do form
    form.addEventListener("submit", function (ev) {
    // Tira o comportamento padrão da pagina de atualizar ao ser enviado
    ev.preventDefault()

    //obtendo os valores de entrada do formulário
    const name = document.querySelector("input[name='name']").value
    const address = document.querySelector("input[name='address']").value
    const breadType = document.querySelector("select[name='breadType']").value
    //:checked usa apenas os elementos que estão marcados
    const main = document.querySelector("input[name='main']:checked").value
    const observations = document.querySelector("textarea[name='observations']").value

    //String vazia para armazenar os valores selecionados da salada
    let salad = ""
    //Seleciona todos os campos com o name salad que foram marcados
    document.querySelectorAll("input[name='salad']:checked").forEach(function(item){
        //Adiciona valor do campo de entrada marcado á string salad
        salad += " - " + item.value + "\n"
    })

    //exibe no console os valores coletados no formulário
    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations
    }) 
    
    // Exibe um alerta com as informações do pedido realizado
    alert (
        "Pedido Realizado!" +
    "\nNome do cliente: " + name +
    "\nEndereço de entrega: " + address +
    "\nTipo de pão: " + breadType +
    "\nRecheio: \n - " + main + "\n" + salad +
    "Observações: " + observations
    )

})

