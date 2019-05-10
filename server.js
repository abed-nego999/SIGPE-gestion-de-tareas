var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  sigpeModel = require('./api/models/sigpesModel'), //created model loading here
  bodyParser = require('body-parser'),
  sigpesRouter = require('./api/routes/sigpesRouter'); //importing router;
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://cluster0-f3avm.mongodb.net/test",
  {user: "admin", pass: "admin1234"});


app.use(bodyParser.urlencoded({ extended: true }));
app.use("/sigpes", bodyParser.json());
app.use("/sigpes", sigpesRouter(express));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);