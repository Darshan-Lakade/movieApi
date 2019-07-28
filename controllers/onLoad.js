const api = process.env.API_KEY;

const handleOnLoad = fetch => (req,res) => {

    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${api}`)
    .then(res => res.json())
    .then(data => res.send(data))
    .catch(err => res.status(400).json('error in fetching'))

}

const handleOnLoadTopRated = fetch => (req,res) => {

    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => res.send(data))
    .catch(err => res.status(400).json('error in fetching'))

}

module.exports = {
    handleOnLoad: handleOnLoad,
    handleOnLoadTopRated: handleOnLoadTopRated
};