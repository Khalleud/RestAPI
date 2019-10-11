const mongoose = require('mongoose');

const CommandSchema = mongoose.Schema({
    nom: String,
    prenom:String,
    tel: [],
    adresse: String,
    commune:String,
    wilaya:String,
    numeroCommande:Number,
    produit:String,
    prix:Number,
    livraison:String,
    stopDesk:String
});

module.exports = mongoose.model('Commands', CommandSchema);
