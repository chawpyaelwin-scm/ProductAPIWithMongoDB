const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {type: String},
    price: {type: String},
    type: {type: String},
    color:{type: String}
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);
