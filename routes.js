module.exports = (app) => {
    const cmd = require('./controller.js');

    // Create a new Product
    app.post('/Commands', cmd.create);





    // Update a Note with productId
    app.put('/Commands/:CommandId', cmd.update);

    // Delete a Note with productId
    app.delete('/Commands/:CommandId', cmd.delete);
}
