var express = require('express');
var app = express();
var fs = require('fs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride =require('method-override');
var path = require('path');



/*********set database connection and define db model***********/

//set database connection 

var url = "mongodb://localhost:27017/transaction";

mongoose.connect(url);

//mongoose model

var dbmodel = mongoose.model("production", new mongoose.Schema({
    name:{type:String, require: true},
    price:{type: Number, require:true},
    pic:{type:Buffer,require:true},
    discription:{type:String,}
    
    
}));
/*********Node server configuration***********/

//SET PORT NUMBER
var port = process.env.PORT || 8000;

app.use(morgan('dev'));//console log every HTTP request 

app.use(bodyParser.urlencoded({extended:true})); //parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(path.join(__dirname+'/public')));//set the static files location

app.use('/bower_components',express.static(path.join(__dirname +'/bower_components')));




/********create HTTP Request API**********/

app.get('*', function(req, res){
    res.sendFile(__dirname +'/public/index.html');
})

app.listen(port);
