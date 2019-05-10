# Liri-Node-App
## Link to the github repository
https://github.com/gregory-rutherford/Liri-Node-App
## Link to the video
https://www.youtube.com/watch?v=CMWQIw0jaOM&t=9s
### The Stack
*Node.js
*Moment.js
*Axios
*Inquirer
*Dotenv
### How it works
In order to run this you will need your own .env file
with the proper spotify keys and secret data. Create your own keys/secret here:
https://developer.spotify.com/

Open the terminal and run `node liri.js`

#### You have 4 options
1. "spotify-this-song" 
    If you do not enter a search it defaults to "The sign" by Ace of Base"
    ![Spotify Gif](/images/giphy.gif)
    
    If you do enter a search it will dislay the song, the artist, a preview link, and the album the song appears on.
    ![Spotify search Gif](/images/giphy(1).gif)
2. "concert-this"
    You will need to input a valid search for this to work properly. If an error occurs it most likely means that there are no shows available for that particular artist
    ![concert gif](/images/giphy(2).gif)
3. "movie-this"
    If you do not enter a search it defaults the query to "Mr Nobody"
    ![movie no search gif](/images/giphy(3).gif)

    If you do enter a search it will display the title, year, imdb rating, rotten tomatoes rating, production company, and the language

    ![movie search gif](/images/giphy(4).gif)
4. "do-what-it-says"
    Enter through the search and this will read a "random" file that calls the spotify api with a surpise search.

    ![do it gif](/images/giphy(5).gif)

####Challenges

I enjoyed making this as I am starting to feel more comfortable with my javascript ability. The first problem I met was using the switch case as previously I had only used `if/else` statements. The second problem had to do with getting the spotify and movie searches to default. I tried a few different ways but landed on using the `||` operator within the template literal. Outside of the code issues this was the first time I had installed npm packages, fairly straightforward but I did type in the wrong command a few times. This led to my understanding of the value of reading the documentation available. I also learned about `.gitignore` and why it is important to not commit everything to Github. 
