//Diferent way for writing AMD
var seedData = require('./seedData');

var data = {};
data.getNoteCategories = function (next) {
    next(null, seedData.initialNotes);
};

module.exports = data;