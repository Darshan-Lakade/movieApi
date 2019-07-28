let common = ''
const api = require('../controllers/config/config').api;

const handleGenre = fetch => (req,res) => {

    const{genreID} = req.body;
    common = genreID;

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&
            sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`)
            .then(res => res.json())
            .then(data => res.send(data))
            .catch(err => res.status(400).json('error in fetching'))
}

const handleGenrePage = fetch => (req,res) => {

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&
            sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${common}`)
            .then(res => res.json())
            .then(data => res.send(data))
            .catch(err => res.status(400).json('error in fetching'))
}

module.exports = {
    handleGenre: handleGenre,
    handleGenrePage:handleGenrePage
}