const Client = require('../models/clients');
const User = require('../models/user');
const Appt = require('../models/appointments');


module.exports = {
    create,
    new: newAppt,
    delete: deleteAppt
   
  
}

function newAppt(req, res) {
    res.render('clients')
}

// function create(req, res) {
//     // console.log(req.body, ' contents of the form');
//     // update

//     console.log(req.body, " after");

//     // // remove the white space in the string
//     // req.body.cast = req.body.cast.replace(/\s*, \s*/g, ',')
//     // req.body.cast = req.body.cast.split(',')

//     // THe server now tells the Model
//     // to take the contents of the form (req.body) sent from the client
//     // and put it in the database
//     req.body.client = req.params.id


//     // req.user = User.findById(req.params.id, function (err, userDoc){
//     //     console.log(userDoc, '<===== this is userdoc')
//     // })
//     // req.user._id = req.user
//     Appt.create(req.body, function (err, apptDoc) {
//         // req.user = User.findById(req.params.id, function (err, userDoc){
//         //     console.log(userDoc, '<===== this is userdoc')
//         // })
//         // // userDoc = req.user._id
//         // // console.log(req.body)
//         if (err) {
//             console.log("======================err");
//             console.log(err);
//             console.log("==========================================");

//             return res.send("err creating check the terminal");
//         }
//         console.log("=============== Below is the movieDoc from the db");
//         console.log(apptDoc)
//         console.log("==========================================");


//         // respond to the client
//         res.redirect(`/clients/${req.params.id}`);
//     })
// }; // end of the callback function in Movie.create
//   // end of the create controller function


function create(req, res) {
    // first check the contents of the form
    // console.log('========================');
    // console.log(req.body, " <- content of the form");
    // console.log('=========================')
    // // check for the movie id in the params
    // console.log('========================');
    // console.log(req.params.id, ' <req.params.id aka(the movie id)')
    // console.log('========================');

    // NOW We need to use our model to take the contents of the form (req.body)
    // and put them in the database

    // One Movie to many reviews
    // adding a review to A movie

    // 1. Find the movie we want to add the review!
    // req.params.id is the movie id
    Client.findById(req.params.id, function (err, clientDoc) {
        if (err) {
            console.log(err, " <- err from Movie.findById callback");
            return res.send("error from create reviews check the terminal");
        }

        console.log("========================");
        // found movie from the database that we want to add the review (req.body) to!
        console.log(clientDoc, " <- client from the database!");
        console.log("========================");
        //   req.body.user = req.user._id
        //   req.body.userName = req.user.userName
        //   req.body.userAvatar = req.user.avatar
        // 2. add the review to the movieDocuments reviews array
        // req.body (contents of the form), which in this case represents a review!
        clientDoc.appointments.push(req.body);
        // since movieDoc is a document and we're mutating it (changing it, adding something to reviews array)
        // we need to tell the database, so to tell database we call `.save() on the movieDoc
        clientDoc.save(function (err, clientDoc){ 
            // respond to the clinet
            //   console.log(movieDoc)
            console.log(err, " <_ err from movieDoc.save callback")
            // respond to the client in the callback
            // go back to the show page that the form was submitted from
            // so you can check the movie from the database in the show controller
            res.redirect(`/clients/${req.params.id}`);
        });
        
    });
};

function deleteAppt(req, res) {
    console.log(req.params.id, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    Client.findOne({ 'appointments._id': req.params.id }, function (err, clientDoc) {
       
      if (!clientDoc) return res.redirect('/clients/showMy');
  
      clientDoc.appointments.remove(req.params.id);
      
      clientDoc.save(function (err) {
        if (err) return res.send('err, check terminal');
        res.redirect(`/clients/${clientDoc._id}`)
      })
    })
  }