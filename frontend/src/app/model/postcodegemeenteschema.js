var mongoose=require('mongoose');
  
var PostcodeGemeenteModel = new mongoose.Schema({
    pc6: String,
    buurt: Number,
    wijk: Number,
    gemeente: Number,
    postcode: String,
    buurtNaam: String,
    wijkNaam: String,
    buurtNaam: String,
    gemeenteNaam: String
});
  
module.exports = mongoose.model(
    'postcode-gemeente', PostcodeGemeenteModel, 'postcode-gemeente');