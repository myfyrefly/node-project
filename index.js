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

//require the api file 
const apiFile = require("./util/axios");

//requuire the the markdown file
const markdown = require("./util/generateReadMe");
let questions = [
  {
      type:"input", 
      name: "github",
      message: "what is your github username?"
  } ,
  {
      type:"input",
      name: "title",
      message: "What is your project's name?"
  } ,
  {
    type:"input",
    name: "description",
    message: "Describe your project:"
  } ,
  {
    type:"input",
    name: "table of contents",
    message: "Does your project have a table of contents?"
  } ,
  {
    type:"input",
    name: "installation",
    message: "Are there additional technologies that need installation?",
    //create a defult option indiating npm i as the value
    default: "npm i"
  } ,
  {
    type:"input",
    name: "usage",
    message: "Is there a usage condition?"
  } ,
  {
    type:"input",
    name: "license",
    message: "Is there a license?",
    //provide choices using an array
    choices: ["Apache", "MIT", "None" ]
  } ,
  {
    type:"input",
    name: "contributing",
    message: "Can users contribute to this project?"
  } ,
  {
    type:"input",
    name: "tests",
    message: "Command To Run Test?",
    //provide a default options with the value of "npm start"
    default: "npm start"
  } ,
  {
    type:"input",
    name: "profile pic",
    message: "Do you have a github profile pic?"
  } 
];
//Create a fucntion that will write the data to a file 
function writeToFile(fileName, data){
    //one line hitter
    return 
    //Requiring fs's premade file creating function (writeFileSyn)
    fs.writeFileSync
    //utilize  the following path to create the desired file 
        //process.cwd() - allows for the process of the file to be executed (important function to actually create the file)
        //it will obtain the fileName (ReadeME) during the process 

    (path.join(process.cwd(), fileName),data);
}


//Create a function that will start prompting the questions in order to generate the ReadMe
function init () {
    //ask inquirer to utiize its prompt function 
    //.then = promise function
    inquirer.prompt(questions).then((inquirerResp) => {

        console.log("working on it for you...")
     
        //utilize the api variable to activate the api


        //utilize the api() - which will call to github and obtain the user
        .getUser(inquirerResp.github)
        //create the promise that will execute the writeFile()
        .then(({data}) => {
            writeToFile("ReadMe.md", markdown({...inquirerResp, ...data}))
        })
        
        });
    }

init()
