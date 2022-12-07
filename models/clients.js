const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const clientSchema = new Schema ({
    email: String,
    name: String,
    lcv: Number,
    services_received: [{type: Schema.Types.ObjectId, ref: 'Services'}],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    phone: String,
    yearVal: Number

});

module.exports = mongoose.model("Client", clientSchema);