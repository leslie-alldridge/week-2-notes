let express = require('express'),
    router = express();
const art = require('./art.json'),
    viewData = {
    title: 'Gallery',
    art: art
};

router.get('/', (req, res) => {
    res.render('home', viewData);
});

router.get('/artworks/:id', (req, res) => {
    let requestID = req.params.id,
      selectedArtwork = art.find((artwork) => {
      return artwork.id == requestID;
    });
    res.render('artwork', selectedArtwork)
});

module.exports = router;