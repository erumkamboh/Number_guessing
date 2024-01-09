"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var number = Math.floor(Math.random()) * 10 + 1;
for (var i = 0; i < 3; i++) {
    var game = await inquirer_1.default.prompt({
        type: "number",
        name: "userguess",
        message: "enter your guess"
    });
    if (game.userguess == number) {
        console.log("true guess");
    }
    else {
        console.log("false guess");
    }
}
