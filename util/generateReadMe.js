// Create a function that will generate the URL
function generateURL (github, title) {
    var myLink = title.toLowerCase().split(" ").join("-");
      
    return `https://github.com/${github}/${myLink}`
//example //https://github.com/lbrow/your-read-me

}

//Function 2
//Render the license badge 
//Paramaters that will need to be used: 
    //license, github, title
//What type of function? if and return
function badgeImg(license, github, title) {
    if(license !== "none") {
        return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateURL(github, title)})`
    } return "";
}


//Function 3
//Render license section 
//Paramaters that will need to used:
    //license
    //What type of function? if and return
function licenseHeading (license) {
    if(license !== "none") {
        return ( `##License
        This project is licensed under the following: ${license}`)
    }
    return "";
}


//Function 4
//Generate the actual markdown
//This function will utilize function 2 and 3
//you will also enter all of the user input variables 

function generateMD (data) {
    return `
    #Title ${data.title}
    ${badgeImg(data.license, data.github, data.title)}
    #Description
    ${data.description}
    ${licenseHeading(data.license)}
    `
}

module.exports = generateMD;
