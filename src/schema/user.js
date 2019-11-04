const { model } = require('mongoose');

const Cat = model('Cat', { name: String });

module.exports = Cat;
