const Client = require('../models/clients');
const User = require('../models/user');

module.exports = {
  homepage,
  dashShow,
  new: newClient,
  create
}

function homepage(req, res) {
  // Tell the model,
  // to go get ALL of the movies from
  // the database Movie is our model
  // Client.find({}, function (err, clientDocs) {
  // moviesDocs is all of the movies
  // from our collection in mongodb!
  // console.log(clientDocs);

  // respond to the client inside the callback of the model
  // res.render('clients/index', { clients: clientDocs });
  res.render('login');
  // });
}

function dashShow(req, res) {

  res.render('dash', { user: req.user });
}

function newClient(req, res) {

  res.render('clients/new', { user: req.user })
}

function create(req, res) {
  // console.log(req.body, ' contents of the form');
  // update

  console.log(req.body, " after");

  // // remove the white space in the string
  // req.body.cast = req.body.cast.replace(/\s*, \s*/g, ',')
  // req.body.cast = req.body.cast.split(',')

  // THe server now tells the Model
  // to take the contents of the form (req.body) sent from the client
  // and put it in the database

  Client.create(req.body, function (err, clientDoc) {
    if (err) {
      console.log("======================err");
      console.log(err);
      console.log("==========================================");

      return res.send("err creating check the terminal");
    }
    console.log("=============== Below is the movieDoc from the db");

    console.log("==========================================");
   
    userDoc.clients.push(clientDoc)
    userDoc.save(function(err){
    // respond to the client
    res.redirect('/dash');
    })
  }); // end of the callback function in Movie.create
} // end of the create controller function