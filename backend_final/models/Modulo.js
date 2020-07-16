const mongoose = require('mongoose');

const { Schema } = mongoose;

const moduloSchema = new Schema ({
    mod_name: {
        type: String,
        required: true,
        trim: true,
      },
    status: {
        type: Boolean,
        required: true,
        default: false,
      },
} , { timestamps: true, versionKey: false });

const Modulo = mongoose.model('Modelo', moduloSchema);

module.exports = { Modulo };


