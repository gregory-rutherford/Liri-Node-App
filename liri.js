require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var spotCommand = "spotify-this-song";
var song = process.argv[3];

if (spotCommand === process.argv[2]){
    // console.log(process.argv[3]);
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       for (var key in data) {
        //    console.log(data[key]);
           var dataObj = data[key];
           var name = dataObj.items[0].name;
           var artist = dataObj.items[0].artists[0].name;
           console.log(name, artist);
        }
      });
}
