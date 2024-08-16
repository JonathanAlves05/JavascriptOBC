// Usando o babel para converter meu código Javascript para versões antigas
// Comecei inicianto o npm
// depois instalei os módulos que compõe o babel 
// npm install --save-dev @babel/core @babel/cli @babel/preset-env

// com npx babel index.js ele compilou meu código e exibiu o resultado no próprio terminal, apenas alterou o ;
// Salvei o resultado em um novo arquivo usando: npx babel index.js --out-file dist.js

// utilizamos o preset-env para deixar compativel com o ES5. No Babel, presets são configurações prontas para casos de uso comuns,
// o que nos poupa bastante trabalho de configuração. O @babel/preset-env que nós instalamos é um preset que fará
// essa conversão para ES5 por padrão, mas que também é altamente configurável.
// Comando padrão: npx babel index.js --out-file dist.js --presets=@babel/preset-env

// Além de usar o babel em único arquivo é possivel utilizar em pastas inteiras. Criei uma pasta src
// e dividir o conteúdo do index.js. 
// Usando o comando: npx babel src --out-dir dist --presets=@babel/preset-env ele criou uma pasta dist com 
// os arquivos dentro da pasta.]

// Configuramos o script para utilizar o babel de forma mais rapida 
// podemos configurar o Babel através de arquivos, assim não precisaremos utilizar as flags no comando.
// Ele possui dois tipos de arquivos de configuração: .babelrc e babel.config.js. 
// O babel.config.js é o arquivo de configuração principal, com ele podemos definir as opções que serão usadas como padrão pelo Babel.
// Já o .babelrc permite escrever configurações específicas para diretórios ou partes específicas dos nossos projetos.
