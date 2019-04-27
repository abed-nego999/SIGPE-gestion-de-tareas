'use strict';


var mongoose = require('mongoose'),
  Sigpe = mongoose.model('Sigpes');

exports.list_all_sigpes = (req, res) => {
  Sigpe.find({}, (err, sigpe) => {
    if (err) {
      res.send(err);
    }
    res.json(sigpe);
  });
};




exports.create_a_sigpe = (req, res) => {
  var new_sigpe = new Sigpe(req.body);
  new_sigpe.save((err, sigpe) => {
    if (err) {
      res.send(err);
    }
    res.json(sigpe);
  });
};


exports.read_a_sigpe = (req, res) => {
  Sigpe.findById(req.params.sigpeId, (err, sigpe) => {
    if (err) {
      res.send(err);
    }
    res.json(sigpe);
  });
};


exports.update_a_sigpe = (req, res) => {
  Sigpe.findOneAndUpdate({_id: req.params.sigpeId}, req.body, {new: true}, (err, sigpe) => {
    if (err) {
      res.send(err);
    }
    res.json(sigpe);
  });
};


exports.delete_a_sigpe = (req, res) => {

  Sigpe.remove({
    _id: req.params.sigpeId
  }, (err, sigpe) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Sigpe eliminada con éxito' });
  });
};