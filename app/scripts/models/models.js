var Backbone = require('backbone');



// var button = Backbone.Model.extend({
//
// });

// var PizzaCollection = require('./models/models.js').Pizzaollection;
var Pizza = Backbone.Model.extend({

});

var PizzaCollection = Backbone.Collection.extend({
  model: Pizza,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/pizza',

});console.log(PizzaCollection);

module.exports = {
  PizzaCollection: PizzaCollection,
  Pizza: Pizza
};
