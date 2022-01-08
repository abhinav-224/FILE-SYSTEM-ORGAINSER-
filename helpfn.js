 function help(){
    console.log(`PLEASE FOLLOW THIS INSTRUCTION 
                 1. TREE :->     node fext.js tree <dirPath>
                 2. ORGANISE :-> node fext.js organise <dirPath>
                 3. HELP   :->   node fext.js help   `)

}


const fs = require("fs");
const path = require("path");

  module.exports ={
      helpfnKey:help

  }




