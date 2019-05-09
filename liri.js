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
    type: "list",
    name: "choice",
    message: "Please choose from the following options",
    choices: ["spotify-this-song", "concert-this", "movie-this"]
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
  spotify.search({ type: 'track', query: user.userInput || "the sign ace of base"}, function(err, data) {
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
break;
  case "concert-this":
  axios.get(`https://rest.bandsintown.com/artists/${user.userInput}/events?app_id=codingbootcamp`)
  .then(function (response) {
    var data = response.data;
    var venue = data[0].venue.name;
    var location = data[0].venue.city;
    var date = moment(data[0].datetime).format("MM/DD/YYYY");
    console.log(venue, location, date);
  })
  .catch(function (error) {
    console.log('Sorry an error has occured' + error);
  });
  break;
  case "movie-this":
  axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${user.userInput}`)
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
        console.log(title, year, rating, rating2, country, lang, plot, act);
      })
      .catch(function (error) {
        console.log('Sorry an error has occured' + error);
      });
break;
default: 
break;
}
});