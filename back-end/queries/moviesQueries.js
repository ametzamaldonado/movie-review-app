const fetch = require('node-fetch');
require("dotenv").config();

const url = process.env.REACT_APP_API_URL
const key= process.env.REACT_APP_API_KEY
const pop = process.env.REACT_APP_API_POPULAR

const url2 = url + pop + key


const getMovies = async () => {
    try{
        const popMovies = await fetch(url2);
        const json = await popMovies.json();
        return json;
    } catch (err){
        console.log(err)
    }    
}

// const getSearchedMovie = async (search) => {
//     const { query, language, page } = search;
//     try {
//         const searchResults = await fetch(`${url}${key}&language=${language}&query=${query}&page=${page}`);
//         const json = await searchResults.json();
//         return json;
//     }catch (err) {
//         console.log(err);
//     }
// }

module.exports = getMovies
// module.exports = { getMovies, getSearchedMovie}