var $ = require('jquery');
// var Backbone = require('backbone');
var models = require("./models/models.js");  //
var pizzaCollection = require("./models/models.js").PizzaCollection;
// var _ = require('underscore');
var pizzaTemplate = require('../templates/pizza-list.hbs');


var pizzas = new models.PizzaCollection();    //

console.log(pizzas);
$('button').on('click', function(){
$('button').text('Loading');


pizzas.fetch();
})

pizzas.on('update', function(){
  console.log(pizzas);
  
  pizzas.forEach(function(pizza){
    $('button').text('Submit');

    pizza.get('name');

    $('#pizza-menu').append(pizzaTemplate(pizza.toJSON()));

  });

});

//anonymous function expression to loop pizza

console.log(pizzas.toJSON());
