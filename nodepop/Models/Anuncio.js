"use strict";

const mongoose = require("mongoose");

// defino el esquema

var anuncioSchema = mongoose.Schema({
  nombre: { type: String, index: true },
  venta: { type: Boolean, index: true },
  precio: { type: Number, index: true },
  foto: String,
  tags: { type: Array, index: true }
});

// creo el modelo

const Anuncio = mongoose.model("Anuncio", anuncioSchema);

// exporto el modelo

module.exports = Anuncio;
