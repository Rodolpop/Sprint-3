


//const { __esModule } = require('uuid')
let data = require('./data.json')


class Calculadora {


constructor() {

  
    this.suma()
    this.resta()
    this.multiplicacion()
    //this.division()
    //this.cuadrado()
    //this.cubo()

  
}

suma(){
    console.log("Suma:"+ data.a + data.b)
}

resta(){
    console.log("Resta:"+ (data.a - data.b))
}

multiplicacion(){
    console.log("Multiplicación:"+ data.a * data.b)
}

//division(){

//    return data.a / data.b
//}

//cuadrado(){
   
//    return Math.pow(data.a,2);

//}

//cubo(){

//    return Math.pow(data.b,3);

//}

}

//const calculadora = new  Calculadora();

module.exports = Calculadora

//console.log(calculadora.suma());
//console.log(calculadora.resta());
//console.log(calculadora.multiplicacion());
//console.log(calculadora.division());
//console.log(calculadora.cuadrado());
//console.log(calculadora.cubo());