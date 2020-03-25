//axios - dotenv
const axios = require("axios");
//require(dotenv).config();


const axioS = { 
    //grab username from user input
    getUser(username)
 {   //begin axios get call

    return axios
    //utilizing GET call
    .get(
        //implementing the api link (along with the placeholder for the secret key)
         'https://api.github.com/users/${username}?client_id=${ process.env.CLIENT_ID'
    )}
}