const request = require('supertest'),
    server = require('../server'),
    cheerio = require('cheerio');

test('test suite is working', () => {
    console.log('test is working');
});

test('test root route', (done) => {
    request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
        expect(err).toBeFalsy()
        const htmlText = res.text, 
            $ = cheerio.load(htmlText),
            actual = ($('body').text());
        expect(actual).toContain('Gallery')
        done()
    });
});

test('for a class name on each artist page', (done) => {
    request(server)
    .get('/artworks/2')
    .expect(200)
    .end((err, res) => {
        expect(err).toBeFalsy()
        const htmlText = res.text, 
            $ = cheerio.load(htmlText),
            actual = res.text;
        expect(actual).toContain('artistClass')
        done()
    });
});

test('page populates with an image', (done) => {
    request(server)
    .get('/artworks/2')
    .expect(200)
    .end((err, res) => {
        expect(err).toBeFalsy()
        const htmlText = res.text, 
            $ = cheerio.load(htmlText),
            actual = res.text;
        expect(actual).toContain('.jpg')
        done()
    });
});

test('page populates with header', (done) => {
    request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
        expect(err).toBeFalsy()
        const htmlText = res.text, 
            $ = cheerio.load(htmlText),
            actual = res.text;
        expect(actual).toContain('You\'re now viewing')
        done()
    });
});

test('page populates with footer', (done) => {
    request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
        expect(err).toBeFalsy()
        const htmlText = res.text 
            $ = cheerio.load(htmlText),
            actual = res.text;
        expect(actual).toContain('Contact Details')
        done()
    });
});