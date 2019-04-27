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
    required: 'Número de SIGPE necesario'
  },
  Tipo: {
    type: String,
    enum: ['Petición', 'Incidencia'],
    default: 'Petición'
  },
  Reutilizada: {
      type: String
  },
  Titulo: {
      type: String
  },
  Descripcion: {
    type: String
  },
  Estado: {
    Type: StateSchema
  },
  Fecha_llegada: {
    type: Date,
    default: Date.now
  },
  Fecha_salida: {
    type: Date,
    default: Date.now
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