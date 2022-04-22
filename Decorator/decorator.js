
const camb = require('./convers.json');


function conversor(articulo, divisa) {
        try {
            const regex = new RegExp(articulo.divisa + ' ' + divisa);
            articulo.precioEur = articulo.precio * Object.entries(camb).find(n => regex.test(n))[1].toFixed(2);
            console.log(articulo.precioEur);
            
        } catch (error) {
            if(divisa !== 'EUR'){
                console.log('Conversión solo a Euros');
            }else{
                console.log(`La divisa no se encuentra disponible`);
            }
        }
    };

module.exports = conversor;