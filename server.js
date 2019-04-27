var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  Task = require('./api/models/sigpesModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://cluster0-f3avm.mongodb.net/test",
  {user: "admin", pass: "admin1234"},
  (err, res) => {
    if (err) {
      console.log(`ERROR: connecting to Database. ${ err }`);
    }
    app.listen(port, () => {
      console.log(`Node server running on http://localhost:${ port }`);
    });
  });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/sigpesRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);