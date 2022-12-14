const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true}
});

module.exports = mongoose.model('post', postSchema);
