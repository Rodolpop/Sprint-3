

const data = require('./data.json')

class Calculadora  {

    suma(){
        console.log(`suma: ${data.a + data.b}`)

    }

    resta(){

        console.log(`resta: ${data.a - data.b}`)
    }

    multiplicacion(){

        console.log (`multiplicacion: ${data.a * data.b}`)

    }
}

module.exports = Calculadora;
