require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var spotCommand = "spotify-this-song";
let song = process.argv[3];

if (spotCommand === process.argv[2]){
    // console.log(process.argv[3]);
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) 
          return console.log('Error occurred: ' + err);
       for (var key in data) {
        //    console.log(data[key]);
           var dataObj = data[key];
           var name = dataObj.items[0].name;
           var preview = dataObj.items[0].preview_url;
           var artist = dataObj.items[0].artists[0].name;
           var album = dataObj.items[0].album.name;
           console.log("'" + name + "'" + " by: ", artist, "\n", preview, "\n", album);
        } 
      });
}

