var mongoose = require('mongoose');

module.exports = mongoose.model('Beer', {
    name: String
})