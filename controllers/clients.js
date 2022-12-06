const Client = require('../models/clients');
const User = require('../models/user');

module.exports = {
    homepage,
    dashShow
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
    res.render('dash', {user: User});
  }
