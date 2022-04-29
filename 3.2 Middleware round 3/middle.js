

class Middleware{

    constructor(calculadora){
    
    this.calculadora = calculadora;
    this.middlewares = []; 
    this.param = {}

    //obtener prototipo de la instancia digerida
    const prototype = Object.getPrototypeOf(this.calculadora);
    
    //listar propiedades del prototipo
    const instanceMethods = Object.getOwnPropertyNames(prototype);
    
    //interesan todas menos la propiedad constructor
    //console.log(instanceMethods)
    instanceMethods.shift() //elimino primer elemento del array (constructor)
    console.log(instanceMethods)
    }
    
    //crear array de middlewares [f1, f2, f3]
     use = (middlewaretoAddtoArray) => {this.middlewares.push(middlewaretoAddtoArray);
        /* console.log(this.middlewares) */ }

    //recorrer array de middlewares
     runMiddleware = i => {
        if(i < this.middlewares.length)
            
            this.middlewares[i].call(null,() => this.runMiddleware(i+1))
     }

    //llamar función normal
        get = (fn) => {
            this.runMiddleware(0)
            fn.apply(null,[]) 
    }
}
module.exports = Middleware; 
