const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    email: {type: String},
    password: {type: String},

});

// Export the model
module.exports = mongoose.model('User', UserSchema);
