//Manipulando estilos diretamente pela propriedade style
function useLightTheme(){
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'

}

function useDarkTheme(){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

//Manipulando estilos através das classes utilizadas pelo CSS
function switchTheme(){
    //toggle é um método que adiciona uma classe a um elemento HTML e se a classe ja existir ele remove
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}


document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)