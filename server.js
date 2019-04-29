var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  Sigpe = require('./api/models/sigpesModel'), //created model loading here
  bodyParser = require('body-parser'),
  sigpesRouter = require('./api/routes/sigpesRoutes'); //importing router;
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://cluster0-f3avm.mongodb.net/test",
  {user: "admin", pass: "admin1234"});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(/^\/(?!sigpes).*$/gm, express.static('public'));
app.use(/^\/sigpes.*$/gm, sigpesRouter(express));

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);