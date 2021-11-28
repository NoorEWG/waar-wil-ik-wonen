var mongoose = require('mongoose');
var express = require('express'); 
var router = express.Router();
var Postcode2020Model = require('./postcode2020dataschema');
var PostcodeGemeenteModel = require('./postcodegemeenteschema');
var BevolkingsDataModel = require('./bevolkingdataschema');
const connectionString = "mongodb://localhost:27017/waar-wil-ik-wonen?";

// Connecting to database
var query = connectionString;
  
const db = (query);
mongoose.Promise = global.Promise;
  
mongoose.connect(db, { useNewUrlParser : true, 
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});
  
module.exports = router;

 
 router.get('/find/postcode-data-2020/:postcode', function(req, res) {
    var pc = req.params.postcode;
    Postcode2020Model.findOne({postcode:pc}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 });

 router.get('/find/postcode-gemeente/gemeente/:gemeente', function(req, res) {
    var gemeente = req.params.gemeente;
    PostcodeGemeenteModel.find({gemeente:gemeente}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 }); 

 router.get('/find/postcode-gemeente/gemeente-buurt/:gemeente/:buurt', function(req, res) {
    PostcodeGemeenteModel.find({gemeenteNaam: req.params.gemeente, buurtNaam: req.params.buurt}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 }); 

 router.get('/find/postcode-gemeente/postcode/:postcode', function(req, res) {
    PostcodeGemeenteModel.find({pc6: req.params.postcode}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 }); 

 router.get('/find/postcode-data/postcode/:postcode', function(req, res) {
    Postcode2020Model.find({postcode: req.params.postcode}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 }); 

 router.get('/find/bevolking-data/gemeente/:gemeente', function(req, res) {
    BevolkingsDataModel.find({RegioS: req.params.gemeente}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 }); 

 router.get('/find/bevolking-data/gemeente-jaar/:gemeente/:jaar', function(req, res) {
    BevolkingsDataModel.find({RegioS: req.params.gemeente, Perioden: req.params.jaar}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 }); 
