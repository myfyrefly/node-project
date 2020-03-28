// Create a function that will generate the URL
function generateURL (github, title) {
    var myLink = title.toLowerCase().split(" ").join("-");
      
    return `https://github.com/${github}/${myLink}`
//example //https://github.com/lbrow/your-read-me

}

