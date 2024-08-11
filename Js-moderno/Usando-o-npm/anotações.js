// Agora já podemos acessar uma pasta e criar um projeto gerenciado pelo npm com o seguinte comando:
// Obs.: Veja que ele criou o arquivo “package.json”, um arquivo com informações do nosso projeto.
// npm init

// Para instalar um novo módulo no nosso projeto usamos o comando:Obs.: Veja que isso criará a pasta “node_modules”, que é onde todos os nossos módulos instalados ficam localizados.
// npm install --save lodash

// Já podemos criar um arquivo “index.js”, importar o módulo lodash e utilizá-lo:Obs.: Repare que estamos trabalhando com o Node.js e não com o browser, então vamos usar o CommonJS.
// const _ = require("lodash")

// console.log(lodash.isArray([]))
// console.log(lodash.kebabCase("Jonathan Alves Rodrigues"))

// Outra funcionalidade importante é a instalação de dependências de desenvolvimento, o que pode ser feito com a flag:Obs.: Uma dependência de desenvolvimento é um módulo que o nosso projeto só utiliza enquanto estamos codificando ele, para ele se usado de verdade ela não será necessária.
// npm install --save-dev eslint

// Um último recurso interessante para mencionar nessa nossa introdução são as dependências globais. Uma dependência global é um módulo que não fica vinculado a um projeto específico, mas é instalado no seu computador para você usar onde e quando quiser. Para instalar um módulo globalmente usamos o comando com a flag:
// npm install --global sass

// E por fim, também podemos remover módulos manualmente excluindo-os do arquivo “package.json” ou usando o comando:
// npm uninstall eslint