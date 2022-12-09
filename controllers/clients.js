const Client = require('../models/clients');
const User = require('../models/user');
const Appt = require('../models/appointments')

module.exports = {
  homepage,
  dashShow,
  new: newClient,
  create,
  index,
  show,
  edit,
  update,
  delete: deleteClient
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

async function dashShow(req, res) {
  let client = await Client.find({})
  res.render('dash', { user: req.user, client });
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
  req.body.user = req.user

  Client.create(req.body, function (err, clientDoc) {

    console.log(req.body)
    if (err) {
      console.log("======================err");
      console.log(err);
      console.log("==========================================");

      return res.send("err creating check the terminal");
    }
    console.log("=============== Below is the movieDoc from the db");
    console.log(clientDoc)
    console.log("==========================================");


    // respond to the client
    res.redirect('/clients/showMy');
  })
}; // end of the callback function in Movie.create
// end of the create controller function

async function index(req, res) {
  const clientDocs = await Client.find({});
  res.render('clients/showMy', { client: clientDocs })
}

async function show(req, res) {
  try {
    const clientDoc = await Client.findById(req.params.id);
    console.log(clientDoc);
    res.render('clients/show', { client: clientDoc });

  } catch (err) {
    console.log(err)
    res.send('you messed up')
  }
}

function edit(req, res) {
  console.log(req.user._id, '======================== here is req.user._id')
  Client.findOne({_id: req.params.id, user: req.user._id}, function(err, clientDoc) {
    if (err || !clientDoc) return res.redirect('/dash');
    res.render('clients/edit', {client: clientDoc});
  });
}

function update(req, res) {
  console.log(req.params.id, '----------------- params')
  Client.findOneAndUpdate(
    {_id: req.params.id},
    // update object with updated properties
    req.body,
    // options object with new: true to make sure updated doc is returned
    {new: true},
    function(err, clientDoc) {
      if (err || !clientDoc) return res.redirect('/clients');
      res.redirect('/clients/showMy');
    }
  );
}

function deleteClient(req, res) {
  Client.findOneAndDelete(
    // Ensue that the book was created by the logged in user
    {_id: req.params.id }, function(err) {
      // Deleted book, so must redirect to index
      res.redirect('/clients/showMy');
    }
  );
}