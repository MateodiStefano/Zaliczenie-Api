const mongoose = require('mongoose')

const pracownikprzykład = new mongoose.Schema({

    imie: {
        type: String,
        required: true
    },

    nazwisko: {
        type: String,
        required:true
    },

    technologia: {
        type: String,
        required:true
    },

    obecnosc: {
        type: Boolean,
        required:true,
        default:false
    }

})

module.exports = mongoose.model('Pracownik', pracownikprzykład)