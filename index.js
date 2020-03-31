//axios - dotenv - inquirer (install)
//axios = ajax (alows for api calls)
//dotenv = allows you to create a .env file and separate code 

//Already installed packages: 
    //fs = allows you to utilize files within the folders
    //path = routing for your folders 

//Begin requiring the packages above (excluding axios&dotenv)   
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

//require the api file **formerly  
const handleCall = require("./util/axios");

//require the the markdown file
const generateMD = require("./util/generateReadMe");
let questions = [
  {
      type:"input", 
      name: "github",
      message: "What is your Github username?"
  } ,
  {
      type:"input",
      name: "title",
      message: "What is your project's title?"
  } ,
  {
    type:"input",
    name: "description",
    message: "Briefly describe your project:"
  } ,
  {
    type:"input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    //create a defult option indiating npm i as the value
    default: "npm i"
  } ,
  {
    type:"input",
    name: "usage",
    message: "What does the user need to know about using this repo?"
  } ,
  {
    type:"list",
    name: "license",
    message: "Is there a license?",
    //provide choices using an array
    choices: ["Apache", "MIT", "None"]
  } ,
  {
    type:"input",
    name: "contributing",
    message: "Can users contribute to this project?"
  } ,
  {
    type:"input",
    name: "tests",
    message: "Command to run tests?",
    //provide a default options with the value of "npm start"
    default: "npm start"
  } ,
  {
    type:"input",
    name: "questions",
    message: "How do you want to handle questions about your project?"
  } 
];
//Create a fucntion that will write the data to a file 
function writeToFile(fileName, data){
    //one line hitter
    return fs.writeFileSync(path.join(process.cwd(), fileName),data);

}



    //Requiring fs's premade file creating function (writeFileSyn)
   
    //utilize  the following path to create the desired file 
        //process.cwd() - allows for the process of the file to be executed (important function to actually create the file)
        //it will obtain the fileName (ReadeME) during the process 

    



//Create a function that will start prompting the questions in order to generate the ReadMe
function init () {
    //ask inquirer to utiize its prompt function 
    //.then = promise function
    inquirer.prompt(questions).then((inquirerResp) => {

        console.log("working on it for you...");
     
        //utilize the api variable to activate the api

        handleCall
          //utilize the api() - which will call to github and obtain the user
          .getUser(inquirerResp.github)
          //create the promise that will execute the writeFile()
          .then(({data}) => {
              writeToFile("ReadMe.md", generateMD({...inquirerResp, ...data}))
        })
        
        });
    }

init()
