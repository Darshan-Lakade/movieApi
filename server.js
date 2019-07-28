var express = require('express');
var fetch = require('node-fetch');
var cors = require('cors');
var bodyparser = require('body-parser');
var onLoad = require('./controllers/onLoad');
var onSearch = require('./controllers/onSearch');
var onGenre = require('./controllers/onGenre');
var onPages = require('./controllers/onPages');
var onView = require('./controllers/onView');

var app = express();

app.use(cors());
app.use(bodyparser.json());

app.get('/', (req,res) => { res.send('Server is Running')})

app.post('/trending', onLoad.handleOnLoad(fetch));
app.post('/', onLoad.handleOnLoadTopRated(fetch));
app.post('/onsearch', onSearch.handleSearchMovie(fetch));
app.post('/onsearchpage', onSearch.handleSearchPage(fetch));
app.post('/genre', onGenre.handleGenre(fetch));
app.post('/genrepage', onGenre.handleGenrePage(fetch));
app.post('/pagestrending', onPages.handleTrendingPages(fetch));
app.post('/pagessearch', onPages.handleSearchPages(fetch));
app.post('/pagesgenre', onPages.handleGenrePages(fetch));
app.post('/view', onView.handleView(fetch));
app.post('/viewupdate', onView.handleViewUpdate(fetch));

 app.listen(process.env.PORT || 3000, function(){
    console.log(`server running on port ${process.env.PORT}`)
 });