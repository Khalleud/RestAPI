const Command = require('./model')


exports.create = (req, res) => {

    if(!req.body) {
        return res.status(400).send({
            message: "Command content can not be empty"
        });
    }

    // Create a Product
    const command = new Command({
        nom: req.body.nom,
        prenom: req.body.prenom,
        tel: req.body.tel,
        adresse: req.body.addresse,
        commune: req.body.commune,
        wilaya: req.body.wilaya,
        numeroCommande: req.body.numeroCommande,
        produit: req.body.produit,
        prix: req.body.prix,
        livraison: req.body.livraison,
        stopDesk: req.body.stopDesk

    });

    // Save Product in the database
    command.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the Command."
        });
    });
};





exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Command content can not be empty"
        });
    }

    // Find and update product with the request body
    Command.findByIdAndUpdate(req.params.CommandId, {
      nom: req.body.nom,
      prenom: req.body.prenom,
      tel: req.body.tel,
      adresse: req.body.addresse,
      commune: req.body.commune,
      wilaya: req.body.wilaya,
      numeroCommande: req.body.numeroCommande,
      produit: req.body.produit,
      prix: req.body.prix,
      livraison: req.body.livraison,
      stopDesk: req.body.stopDesk
    }, {new: true})
    .then(command => {
        if(!command) {
            return res.status(404).send({
                message: "Command not found with id " + req.params.CommandID
            });
        }
        res.send(command);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Command not found with id " + req.params.CommandId
            });
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.CommandId
        });
    });
};




exports.delete = (req, res) => {
    Command.findByIdAndRemove(req.params.CommandId)
    .then(command => {
        if(!command) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.CommandID
            });
        }
        res.send({message: "Command deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Command not found with id " + req.params.CommandID
            });
        }
        return res.status(500).send({
            message: "Could not delete Command with id " + req.params.CommandID
        });
    });
};
