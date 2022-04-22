

class Middleware{

    constructor(){
        this.middlewares = new Array()
    }
     use = (x) =>{
         this.middlewares.push(x)
      }
     MW = (i) =>{
         if(i < this.middlewares.length){
             this.middlewares[i](()=> this.MW(i+1))
         }
     }
     get = (fn) =>{
         this.use(fn)
         this.MW(0)
         this.middlewares.pop()
         
     }
 }

module.exports = Middleware;
