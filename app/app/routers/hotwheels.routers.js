module.exports = function(app){
    var customers = require('../controllers/hotwheels.controller.js');

    app.post('/api/v1/hotwheels', hotwheels.create);

    app.get('api/v1/hotwheels', hotwheels.findAll);

    app.get('api/v1/hotwheels/:id', hotwheels.findOne);

    app.put('api/v1/hotwheels/:id', hotwheels.update);

    app.delete('api/v1/hotwheels/:id', hotwheels.delete);
}