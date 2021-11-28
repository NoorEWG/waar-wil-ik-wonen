var mongoose=require('mongoose');
  
var BevolkingModel = new mongoose.Schema({
    RegioS: String,
    Perioden: String,
    TotaleBevolking_1: String,
    Mannen_2: String,
    Vrouwen_3: String,
});
  
module.exports = mongoose.model(
    'bevolking', BevolkingModel, 'bevolking');