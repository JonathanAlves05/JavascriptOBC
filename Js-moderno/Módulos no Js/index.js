import { inline } from "./inline.js"
import defaultInline from "./inline.js"
import exportDefault, { group, a, b, c, d } from "./non-inline.js"

inline()
defaultInline()

group()
exportDefault()

// Módulos no JavaScript
// Módulos permitem dividir seu código JavaScript em arquivos separados, cada um contendo apenas a lógica 
// relacionada a uma funcionalidade específica. Isso facilita a manutenção, a reutilização e a organização do código.

// CommonJS
// CommonJS é um padrão para módulos usado principalmente no Node.js. Ele define como incluir módulos
// dentro de outros módulos.

// Usa module.exports para exportar funcionalidades de um módulo. module.exports = sayHello;
// Usa require para importar funcionalidades de um módulo. const sayHello = require('./myModule');

// ES Modules (ESM)
// ES Modules são a especificação oficial de módulos no JavaScript, introduzida no ECMAScript 2015 (ES6).
// Eles são suportados nativamente nos navegadores modernos e no Node.js (com a extensão .mjs ou com a configuração adequada).

// Usa export para exportar funcionalidades de um módulo.
// Usa import para importar funcionalidades de um módulo.