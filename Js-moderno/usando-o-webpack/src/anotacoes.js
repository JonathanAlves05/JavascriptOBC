// O Webpack é uma ferramenta de bundling que empacota arquivos JavaScript e suas dependências 
// em um ou mais arquivos de saída, otimizando o código para uso em produção. Ele permite configurar 
// pontos de entrada, determinar o local e nome do arquivo de saída e minificar o código, removendo partes 
// desnecessárias para melhorar o desempenho. Além disso, o Webpack pode gerenciar múltiplos pontos de entrada
// e facilitar o uso de bibliotecas externas, como você fez com a biblioteca dayjs.

// entry: 
// Indica o arquivo inicial que o Webpack vai começar a processar, como o ponto de partida para juntar 
// todo o código e dependências.

// output: 
// Define onde e como o Webpack vai salvar o arquivo final (bundle) gerado, especificando o diretório 
// e o nome do arquivo.

// path: 
// Um módulo do Node.js usado para criar o caminho exato do diretório onde o arquivo final será salvo.

// mode: 
// Configura o Webpack para rodar em modo de desenvolvimento ou produção, ajustando automaticamente algumas
// configurações para otimizar o processo de build.

// Processo de Build:

//  O processo de build é a etapa onde o código-fonte do seu projeto é transformado em um formato otimizado
// para ser executado no ambiente de produção. Isso envolve tarefas como combinar arquivos (bundling), 
// minificar (reduzir o tamanho do código), transpilar (converter código para uma versão mais compatível)
// e incluir todas as dependências necessárias. O objetivo é gerar um ou mais arquivos finais que podem ser 
// facilmente carregados e executados no navegador.

// Ferramenta de Bundling:

// Uma ferramenta de bundling, como o Webpack, junta todos os arquivos do projeto (JavaScript, CSS, imagens, etc.) 
// e suas dependências em um único ou em poucos arquivos (bundles). Isso facilita o carregamento desses arquivos 
// no navegador, reduzindo o número de requisições HTTP e otimizando o desempenho da aplicação.