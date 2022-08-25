const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());



const {
    getMovies
} = require('./queries/moviesQueries');


app.get("/", async (req, res) => {
    const allPopMovies = await getMovies();
    if(allPopMovies){
        res.status(200).json(allPopMovies)
    } else {
        res.status(500).json({ error: "server error!" })
    }
})

// app.get("/search", async (req, res) => {
//     console.log(req.query)
//     const allPopMovies = await getMovies();
//     if(allPopMovies){
//         res.status(200).json(allPopMovies)
//     } else {
//         res.status(500).json({ error: "server error!" })
//     }
//     // res.send("Hello, welcome to the movie app!")
// })


module.exports = app;