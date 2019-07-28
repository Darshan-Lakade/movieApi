const api = process.env.API_KEY;

const handleSearchMovie = fetch => (req,res) => {

    const{SearchField} = req.body;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${SearchField}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(err => res.status(400).json('error in fetching'))
}

const handleSearchPage = fetch => (req,res) => {

    const{val} = req.body;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${val}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(err => res.status(400).json('error in fetching'))
}

module.exports = {
    handleSearchMovie: handleSearchMovie,
    handleSearchPage: handleSearchPage
};