require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
console.log(spotify);

var spotCommand = "spotify-this-song";

if (spotCommand === process.argv[2]){
    console.log()
}
