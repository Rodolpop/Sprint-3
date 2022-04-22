

const { readdir, readFile, writeFile } = require('fs').promises;
const { join } = require('path');
const inbox = join(__dirname, 'inbox');
const outbox = join(__dirname, 'outbox');

const reverseText = str => str.split('').reverse().join('');


  //========================================================


  
   const getInfo = async()=>{

   try{ 

    const files = await readdir(inbox); 

      for(let i = 0; i < files.length; i++) {
        let data = await readFile(join(inbox,files[i]),"utf8");

        await writeFile(join(outbox, files[i]), reverseText(data));
        
        console.log(`${files[i]} was successfully saved in the outbox!`);
    }
    
    } catch (error) {

      return error;

    }

  }

     getInfo()

     .then(msg => console.log(msg))
     .catch(err => console.log(err));

    
   
   

   
   
