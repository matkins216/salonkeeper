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


  console.log(req.body, " after");


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



    res.redirect('/clients/showMy');
  })
};

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
  Client.findOne({ _id: req.params.id, user: req.user._id }, function (err, clientDoc) {
    if (err || !clientDoc) return res.redirect('/dash');
    res.render('clients/edit', { client: clientDoc });
  });
}

function update(req, res) {
  console.log(req.params.id, '----------------- params')
  Client.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    function (err, clientDoc) {
      if (err || !clientDoc) return res.redirect('/clients');
      res.redirect('/clients/showMy');
    }
  );
}

function deleteClient(req, res) {
  Client.findOneAndDelete(
    { _id: req.params.id }, function (err) {

      res.redirect('/clients/showMy');
    }
  );
}