(function (homeController) {
    
    var data = require('../data');    
    
    //Traditional controller sample 
    homeController.init = function (app) {
        app.get('/', function (req, res) {
            data.getNoteCategories(function (err, results) {
                res.render('index', { title: 'Express + Vash', error: err, categories:results });
            });
        });
        
        //API implementation sample
        app.get('/api/users', function (req, res) {
            data.getNoteCategories(function (err, results) {
                res.send({ presenter: 'Heucles', crowd:'The Best'});});
        });
    };
})(module.exports);
