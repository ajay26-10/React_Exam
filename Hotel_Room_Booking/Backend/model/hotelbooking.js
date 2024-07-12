const { Schema } = require ('mongoose');
const { model } = require ('mongoose');


const bookingSchema = new Schema({
    roomnumber : { type: String, unique:true, required: true },
    bookingname : {type: String, required: true},
    checkin : {type: Date, required: true},
    checkout : {type: Date, required: true},
});

const hotelres = model('bookingdetails', bookingSchema);

module.exports = hotelres;