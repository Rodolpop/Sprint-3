


const data = require('./data.json')
const Middlewares = require('./middle')

const Calculadora = require('./calc');


const calculadora = new Calculadora()

const md = new Middlewares(calculadora);

//Definir middlewares
md.use((next) => { 
    console.log(`Middleware1: cuadrado de ${data.a} is ${Math.pow(data.a,2)}`); 
    next()
});

md.use((next) => {
    console.log(`Middleware2: cubo de  ${data.a} is ${Math.pow(data.a,3)}`);
    
    next()
});

md.use((next) => {
    console.log(`Middleware3: ${(data.a/data.b).toFixed(2)} es igual al resultado de la division : ${data.a} by ${data.b}`);
    next()
});

//Ejectuar funciones (y cada una llamará a los 3 middlewares de arriba)
md.get(calculadora.suma);
md.get(calculadora.resta);
md.get(calculadora.multiplicacion); 