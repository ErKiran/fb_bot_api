const mongoose = require('mongoose');

const HoroSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    data:{
        type: Object,
        required: true
    }
})

module.exports = Horoscopes = mongoose.model('horoscopes',HoroSchema)