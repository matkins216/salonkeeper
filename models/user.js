const mongoose = require('mongoose');

const Schema = mongoose.Schema
// Create your User Model


const clientSchema = new Schema ({
   email: String,
   name: String,
   lcv: Number,
   services_received: [{type: Schema.Types.ObjectId, ref: 'Services'}],
   user: {type: Schema.Types.ObjectId, ref: 'User'},
   phone: String,
   yearVal: Number

});


const userSchema = new Schema ({
   name: String,
   googleId: {
    type: String,
    required: true
   },
   email: String,
   avatar: String,
   clients: [clientSchema]
});



module.exports = mongoose.model('User', userSchema);