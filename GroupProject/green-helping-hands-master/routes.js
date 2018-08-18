let express = require('express'),
    fs = require('fs'),
server = express();

// const data = require('./data.json')
const {
	readJson,
	writeJson,
                } = require('./readFiles')


server.get('/', function(req, res){
    res.render('home')

})


server.get('/gardens', function(req, res){
    readJson('./data.json',(err, data) => {
        res.render('garden', data)
    })
})


server.get('/gardens/info', function(req, res){
    res.render('info')
})


module.exports = server