// Create a function that will generate the URL
function generateURL (github, title) {
    var nameME = title.toLowerCase().split(" ").join("-");
    //why a dash? 
    //when you utilize an url 
    //www.go-to-run.com
    //www.theRoad-W orks.com
  
return `https://github.com/${github}/${nameME}`
//example //https://github.com/lbrow/your-read-me

}