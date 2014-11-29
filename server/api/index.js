var express = require('express');
var app = module.exports = express();
var Station =  require('../service/station');
var StationOut = require('../service/stationOut');
var ws = require('../ws');

app.get('/p1/:sensors', function (req, res) {
updatedWebClientStation(new Station(req.param('sensors')));	
res.json(new Station(req.param('sensors')));
});

app.put('/p2/:sensors', function (req, res) {
 updatedWebClient(req.param('sensors'));	
res.json(new StationOut(req.param('sensors')));
});

function updatedWebClient(status){
  ws.callSocket().emit('stationOut', status); 
}

function updatedWebClientStation(status){
  ws.callSocket().emit('station', status); 
}

