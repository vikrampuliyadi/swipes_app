const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {type: String, required: true},
    diningHall: {type: String, required: true},
    date: {type: Date, required: true},
    price: {type: Number, required: true},
    paymentType: {type: String, required: true},
    contactInfo: {type: String, required: true},
    message: {type: String, required: true},
    }, {
        timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;