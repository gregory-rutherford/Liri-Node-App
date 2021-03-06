require("dotenv").config();
const fs = require("fs");
const inquirer = require("inquirer");
const moment = require('moment');
const axios = require("axios");
const Spotify = require('node-spotify-api');
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);


inquirer.prompt([
  {
    type: "rawlist",
    name: "choice",
    message: "Please choose from the following options, if you cannot decide please select 'do-what-it-says' and press ENTER",
    choices: ["spotify-this-song", "concert-this", "movie-this", "do-what-it-says"]
  },
  {
    type: "input",
    name: "userInput",
    message: "please declare your search"
    }
])
.then(function(user){
switch (user.choice) { 
  case "spotify-this-song":
  var input = user.userInput;
  spotSearch(input);
  function spotSearch(input){
  spotify.search({ type: 'track', query: input|| "the sign ace of base"}, function(err, data) {
  if (err) 
          return console.log('Sorry an error has occured: ' + err);
  for (var key in data) {
       var dataObj = data[key];
       var name = dataObj.items[0].name;
       var preview = dataObj.items[0].preview_url;
       var artist = dataObj.items[0].artists[0].name;
       var album = dataObj.items[0].album.name;
       console.log("'" + name + "'" + " by: ", artist, "\n", preview, "\n", album);
  }
  })
}
break;
  case "concert-this":
  axios.get(`https://rest.bandsintown.com/artists/${user.userInput}/events?app_id=codingbootcamp`)
  .then(function (response) {
    var data = response.data;
    var venue = data[0].venue.name;
    var location = data[0].venue.city;
    var date = moment(data[0].datetime).format("MM/DD/YYYY");
    console.log(venue, "\n" + location, "\n" + date);
  })
  .catch(function (error) {
    console.log('Sorry an error has occured' + error);
  });
  break;
  case "movie-this":
  axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${user.userInput || "mr nobody"}`)
      .then(function(response){
        var data = response.data;
        let title = data.Title;
        let year = data.Year;
        let rating = data.Ratings[0].Value;
        let rating2 = data.Ratings[1].Value;
        let country = data.Production;
        let lang = data.Language;
        let plot = data.Plot;
        let act = data.Actors;
        console.log(title, "\n" + year,"\n" +  rating, "\n" + rating2, "\n" + country, "\n" + lang,"\n" +  plot, "\n" + act);
      })
      .catch(function (error) {
        console.log('Sorry an error has occured' + error);
      });
break;
case "do-what-it-says":
fs.readFile("./random.txt", "utf8", function read(err, data){
  if(err) {
    console.log("sorry an error has occured: " + err);
  } 
  var content = data.split(",");
  if (content[0] === "spotify-this-song"){
    spotSearch(content[1]);
  } 
})
default: 
break;
}
});