const mongoose = require("mongoose");

const Schema = mongoose.Schema

const UserSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
      },

      password: {
        type: String, required: true, minlength: 8
      },
});

const userModel = mongoose.model('Users', UserSchema);

 module.exports = userModel;