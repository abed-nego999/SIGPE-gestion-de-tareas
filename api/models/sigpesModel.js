'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SigpeSchema = new Schema({
  Numero: {
    type: String,
    required: "Campo 'Numero' obligatorio"
  },
  Tipo: {
    type: String,
    enum: ['Petición', 'Incidencia'],
    default: 'Petición'
  },
  Ambito: {
    type: String,
    enum: ['Privado', 'Público'],
    default: 'Privado'
  },
  Reutilizada: {
      type: Boolean,
      default: false
  },
  Titulo: {
      type: String,
      required: "Campo 'Titulo' obligatorio"
  },
  Descripcion: {
    type: String
  },
  Estado: {
    type: Schema.Types.Mixed,
    default: {Name: "Verde",
        Color: "#00FF00"}
  },
  Fecha_llegada: {
    type: Date,
    required: "Campo 'Fecha_llegada' obligatorio"
  },
  Fecha_salida: {
    type: Date
  },
  Tecnico_devoteam: {
     type: String
  },
  Tecnico_rsi: {
    type: String
  },
  Funcional: {
    type: String
  },
  Fecha_subida: {
    type: Date
  },
  Comentarios: {
      type: String
  },
  Elementos: {
    type: [String]
  }
});

module.exports = mongoose.model('Sigpes', SigpeSchema);