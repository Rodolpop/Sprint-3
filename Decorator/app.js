
const Producto = require('./articulos');
const conversor = require('./decorator');


const Canson = new Producto('Canson', 5000, 'ARS');
const Crepe = new Producto('Crepe', 500, 'JPY');


conversor(Canson, 'ARS');
conversor(Crepe, 'EUR');

