//axios - dotenv - inquirer (install)
//axios = ajax (alows for api calls)
//dotenv = allows you to create a .env file and seperate code 


//Already installed packages: 
    //fs = allows you to utilize files within the folders
    //path = routing for your folders 

//Begin requiring the packages above (excluding axios&dotenv)   
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

let questions = [
  {
      type:"input", 
      name: "github",
      message: "what is your github username?",
  } ,
  {
      type:"input",
      name: "title",
      message: "What is your project's name?"
  } 
]

//Create a fucntion that will start prompting the questions in order to generate the ReadMe
function init () {
    //ask inquirer to utiize its prompt function 
    //.then = promise function
    inquirer.prompt(questions).then((inquirerResponses)=>
    console.log(inquirerResponses))
}

init()