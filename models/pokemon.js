var connection = require('../db/dbconfig');
var pokemon = {};


function capitalize(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}

pokemon.getAll = function(req, res, next) {
  connection.manyOrNone("SELECT * FROM pokemon;").then(function(result) {
    res.locals.pokemon = result;
    next();
  });
};


module.exports = pokemon;
