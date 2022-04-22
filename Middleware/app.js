const Middleware = require('./middle.js')
const Calculadora = require('./calc.js')
const data = require('./data.json')

const calcR = new Middleware();

const calculadora = new Calculadora();


cuadrado = (next) =>{
    console.log(`El cuadrado de ${data.a} es igual a ${Math.pow(data.a, data.b)}`); 
    next();
}

cubo = (next) =>{ 
    console.log(`El cubo de ${data.a} es igual a ${Math.pow(data.a, data.a)}`); 
    next();
}

division = (next) =>{
    console.log(`La división de ${data.a} entre ${data.b} es igual a ${data.a / data.b}`);
    next();
}

calcR.use(cuadrado)
calcR.use(cubo)
calcR.use(division)
calcR.get(calculadora.suma)
calcR.get(calculadora.resta)
calcR.get(calculadora.multiplicacion)


