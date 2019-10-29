var express = require('express');
var bodyParser = require('body-parser');
const querystring = require('querystring');
var app = express();
var directory = require('serve-index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/some_name', function(req, res){
	var got_url=req.query.got_url;
	res.set('Access-Control-Allow-Origin', '*');
	//res.send(got_url);
	//console.log(decodeURIComponent(got_url));
	const request = require("request");
            const url1 = decodeURIComponent(got_url);
            request.get(url1, (error, response, body) => {
              //data = JSON.parse(body);

              //console.log(body);
                res.send(body);
            });   
    
        //res.set('Access-Control-Allow-Origin', '*');
        //res.send(itemid);
});



app.get('/itemSearch', function(req, res){
	var item_search_url=req.query.item_search_url;
	res.set('Access-Control-Allow-Origin', '*');
	//res.send(got_url);
	
	const request = require("request");
            const url3 = decodeURIComponent(item_search_url);
            request.get(url3, (error, response, body) => {
              //data = JSON.parse(body);

              //console.log(body);
                res.send(body);
            });   
    
        //res.set('Access-Control-Allow-Origin', '*');
        //res.send(itemid);
});



app.get('/photos', function(req, res){
	var phot_url=req.query.photo_url;
	res.set('Access-Control-Allow-Origin', '*');
	//res.send(phot_url);
	
	const request = require("request");
            const url3 = decodeURIComponent(phot_url);
            request.get(url3, (error, response, body) => {
              //data = JSON.parse(body);

              //console.log(body);
                res.send(body);
            });   
    
        //res.set('Access-Control-Allow-Origin', '*');
        //res.send(itemid);
});







app.get('/similar_items', function(req, res){
	var sim_url=req.query.sim_url;
	res.set('Access-Control-Allow-Origin', '*');
	//res.send(phot_url);
	
	const request = require("request");
            const url3 = decodeURIComponent(sim_url);
            request.get(url3, (error, response, body) => {
              //data = JSON.parse(body);

              //console.log(body);
                res.send(body);
            });   
    
        //res.set('Access-Control-Allow-Origin', '*');
        //res.send(itemid);
});


app.listen(8080);
