require("dotenv").config();
const moment = require('moment');
const axios = require("axios");
const Spotify = require('node-spotify-api');
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const command = process.argv[2];
var spotCommand = "spotify-this-song";
var conCommand = "concert-this";
var movieCommand = "movie-this";

const userInput = process.argv;
var inputArr = [];

for (var i = 3; i < userInput.length; i++){
  inputArr.push(userInput[i]);
}
var secondIt = inputArr.toLocaleString();
var input = secondIt.split(",");



switch (command) { 
  case "spotify-this-song":
  spotify.search({ type: 'track', query: input }, function(err, data) {
  // if (err) 
  //         return console.log('Error occurred: ' + err);
  for (var key in data) {

    //    console.log(data[key]);
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
  axios.get(`https://rest.bandsintown.com/artists/${process.argv[3]}/events?app_id=codingbootcamp`)
  .then(function (response) {
    var data = response.data;
    var venue = data[0].venue.name;
    var location = data[0].venue.city;
    var date = moment(data[0].datetime).format("MM/DD/YYYY");
    console.log(venue, location, date);
  })
  .catch(function (error) {
    console.log(error);
  });
  break;
  case "movie-this":
  axios.get(`http://www.omdbapi.com/?apikey=trilogy&s=${input}`)
      .then(function(response){
        var data = response.data;
        console.log(data)
      })
break;
default: 
break;
}

// if (spotCommand === process.argv[2]){
//     spotify.search({ type: 'track', query: input }, function(err, data) {
//         if (err) 
//           return console.log('Error occurred: ' + err);
//        for (var key in data) {
//         //    console.log(data[key]);
//            var dataObj = data[key];
//            var name = dataObj.items[0].name;
//            var preview = dataObj.items[0].preview_url;
//            var artist = dataObj.items[0].artists[0].name;
//            var album = dataObj.items[0].album.name;
//            console.log("'" + name + "'" + " by: ", artist, "\n", preview, "\n", album);
//         } 
//       });
// } else if (conCommand === process.argv[2]){
//   axios.get(`https://rest.bandsintown.com/artists/${process.argv[3]}/events?app_id=codingbootcamp`)
//   .then(function (response) {
//     console.log(response.data);
//     var data = response.data;
//     var venue = data[0].venue.name;
//     var location = data[0].venue.city;
//     var date = moment(data[0].datetime).format("MM/DD/YYYY");
//     console.log(venue, location, date);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }

// else if (movieCommand === process.argv[2]) {
//     axios.get(`http://www.omdbapi.com/?apikey=trilogy&s=${input}`)
//     .then(function(response){
//       var data = response.data;
//       console.log(data)
//     })
// }
