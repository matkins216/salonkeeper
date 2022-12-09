// const mongoose = require("mongoose");
// // optional shortcut to the mongoose.Schema class
// const Schema = mongoose.Schema;

// const appointmentSchema = new Schema ({
//     services: {
//         type: String,
//         enum: ['Cut', 'Cut and Color', 'Color', 'Spa'],
//         default: 'Cut'
//     },
//     date: Date,
//     price: Number,
//     time: Number,
//     user: {type: Schema.Types.ObjectId, ref: 'User'},
//     client: {type: Schema.Types.ObjectId, ref: 'Client'}
// });

// module.exports = mongoose.model("Appt", appointmentSchema);