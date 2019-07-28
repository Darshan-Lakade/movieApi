let api = require('./config/config').api;

const handleTrendingPages = fetch => (req,res) => {

    const{id} = req.body;

    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${api}&page=${id}`)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(err => res.status(400).json('error in fetching'))
}

const handleSearchPages = fetch => (req,res) => {

    const{id} = req.body;
    const{val} = req.body;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${val}&page=${id}&include_adult=false`)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(err => res.status(400).json('error in fetching'))
}

const handleGenrePages = fetch => (req,res) => {

    const{id} = req.body;
    const{genreID} = req.body;

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&
      sort_by=popularity.desc&include_adult=false&include_video=false&page=${id}&with_genres=${genreID}`)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(err => res.status(400).json('error in fetching'))
}

module.exports = {
    handleTrendingPages: handleTrendingPages,
    handleSearchPages: handleSearchPages,
    handleGenrePages:handleGenrePages
};


