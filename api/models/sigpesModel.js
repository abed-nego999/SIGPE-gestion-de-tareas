'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StateSchema = new Schema({
    Name: {
        type: String
    },
    Color: {
        type: String
    }
});

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
    type: StateSchema
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
    type: Date,
    default: Date.now
  },
  Comentarios: {
      type: String
  },
  Elementos: {
    type: [String]
  }
});

module.exports = mongoose.model('Sigpes', SigpeSchema);