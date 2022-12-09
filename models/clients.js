const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const appointmentSchema = new Schema ({
    services: {
        type: String,
        enum: ['Cut', 'Cut and Color', 'Color', 'Spa'],
        default: 'Cut'
    },
    date: Date,
    price: Number,
    time: Number,
    client: {type: Schema.Types.ObjectId, ref: 'Client'},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

const clientSchema = new Schema ({
    email: String,
    name: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    appointments: [appointmentSchema],
    phone: String

});

// a user has many clients.
// a client belongs to a user
// a client has many appointments
// an appointment belongs to a client
// a service belongs to an appointment
// an appointment has 1 service
// a user many appointment, an appointment belongs to a user
// a
module.exports = mongoose.model("Client", clientSchema);