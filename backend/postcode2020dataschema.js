var mongoose=require('mongoose');
  
var PostcodeData2020Model = new mongoose.Schema({
    postcode: Number,
    inwoners: Number,
    man: Number,
    vrouw: Number,
    inwonersJongerDan14: Number,
    inwonersTussen15en24Jaar: Number,
    inwonersTussen25en44Jaar: Number,
    inwonersTussen45en64Jaar: Number,
    inwonersVanaf65Jaar: Number,
    percentagePersonenMetNlAchtergrond: Number,
    percentargePersonenMetWesterseMigratieActergrond: Number,
    percentagePersonenMetNietWesterseAchtergrond: Number,
    aantalHuishoudens: Number,
    totaalEenpersoonsHuishoudens: Number,
    totaalMeerpersoonsHuishoudens: Number,
    aantalEenOuderHuishoudens: Number,
    aantalTweepersoonsHuishoudens: Number,
    gemiddeldeGrootteHuishouden: Number,
    totaalWoningen: Number,
    woningenVoor1945: Number,
    woningen1945en1964: Number,
    woningen1965en1974: Number,
    woningen1975en1984: Number,
    woningen1985en1994: Number,
    woningen1995en2004: Number,
    woningen2005en2014: Number,
    woningen2015en2024: Number,
    meerGezinsWoning: Number,
    percentageKoopwoningen: Number,
    percentageHuurwoningen: Number,
    woningenCorporaties: Number,
    nietBewoondeWoningen: Number,
    gemiddeldeWozWaarde: Number,
    uitkeringenExclusiefAow: Number,
    inwonersPerKm2: Number,
    stedelijkheidCategorie: Number
});
  
module.exports = mongoose.model(
    'postcode2020', PostcodeData2020Model, 'postcode-data-2020');