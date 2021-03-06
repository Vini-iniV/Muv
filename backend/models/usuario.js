const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const usuarioSchema = mongoose.Schema({
  nome: {type: String, required: true},
  email: {type: String, required: true, unique:true},
  senha: {type: String, required: true}
});

usuarioSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Usuario', usuarioSchema);