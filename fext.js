
var inputArr = process.argv.slice(2)
let cmd =inputArr[0]
const organizeObj = require('./organizeFn') 
const treeObj=require('./treefn')
const helpObj=require('./helpfn')
switch(cmd){
    case 'tree':
        treeObj.treeKey(inputArr[1]);
        break;
        // console.log("treefn()")
       
    case 'organise':
        organizeObj.organizeKey(inputArr[1]);
        break;
    case 'help':
        helpObj.helpfnKey()
        break;
          
    default:
        console.log("PLEASE ENTER VALID COMMAND")
        break;
}
