

import inquirer from "inquirer";
let number = Math.floor(Math.random())*10+1
for (let i=0 ; i<3 ; i++){
    let game = await inquirer.prompt({
        type:"number",
        name:"userguess",
        message:"enter your guess"
    })
    
    if (game.userguess==number){
        console.log("true guess")
     }
     else {
        console.log("false guess")
     }
}
 
