let api = require('./config/config').api;
let oapi = require('./config/config').oapi;

const handleView = fetch => (req,res) => {

    const{idMovie} = req.body;

    fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${api}&language=en-US`)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(err => res.status(400).json('error in fetching'))
}

const handleViewUpdate = fetch => (req,res) => {

    const{imdbID} = req.body;

    fetch(`http://www.omdbapi.com/?apikey=${oapi}&i=${imdbID}`)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(err => res.status(400).json('error in fetching'))
}

module.exports = {
    handleView:handleView,
    handleViewUpdate:handleViewUpdate
}